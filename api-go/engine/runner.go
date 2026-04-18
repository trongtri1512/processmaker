package engine

import (
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// ──────────────────────────────────────────────────────────────────────────────
// TokenRunner is the heart of the BPMN Engine.
// It walks the process graph recursively, creating tokens (tasks) at human
// interaction points and auto-advancing through gateways & script tasks.
// ──────────────────────────────────────────────────────────────────────────────

type TokenRunner struct {
	ProcessID string
	RequestID string
	UserID    uint
	NodeMap   map[string]*NodeInfo
	FlowMap   map[string]*SequenceFlow
	Data      map[string]interface{} // Process variables (data JSON)
}

// NewTokenRunner creates a runner from a parsed BPMN process.
func NewTokenRunner(processID, requestID string, userID uint, proc *BProcess, data map[string]interface{}) *TokenRunner {
	if data == nil {
		data = make(map[string]interface{})
	}
	return &TokenRunner{
		ProcessID: processID,
		RequestID: requestID,
		UserID:    userID,
		NodeMap:   BuildNodeMap(proc),
		FlowMap:   BuildFlowMap(proc),
		Data:      data,
	}
}

// ActivateNode is the recursive engine entry point.
// It examines the node type and decides what to do:
//   - UserTask / ManualTask → create a token (stop recursion)
//   - ScriptTask → execute script, then advance
//   - Gateway → evaluate conditions, then advance to selected branches
//   - EndEvent → mark request as completed
//   - Others → auto-advance
func (r *TokenRunner) ActivateNode(nodeID string) {
	node, ok := r.NodeMap[nodeID]
	if !ok {
		log.Printf("[engine] Node %s not found in process graph", nodeID)
		return
	}

	log.Printf("[engine] Activating node: %s (%s) type=%s", node.ID, node.Name, node.Type)

	switch node.Type {

	// ── Human interaction points (create token, stop) ────────────────────
	case NodeUserTask, NodeManualTask:
		r.createToken(node)

	// ── Script execution (auto-advance) ──────────────────────────────────
	case NodeScriptTask:
		r.executeScriptTask(node)

	// ── Gateways ─────────────────────────────────────────────────────────
	case NodeExclusiveGateway:
		r.handleExclusiveGateway(node)

	case NodeParallelGateway:
		r.handleParallelGateway(node)

	case NodeInclusiveGateway:
		r.handleInclusiveGateway(node)

	// ── End event ────────────────────────────────────────────────────────
	case NodeEndEvent:
		r.handleEndEvent()

	// ── All other nodes: auto-advance through outgoing flows ─────────────
	default:
		r.advanceThroughOutgoing(node)
	}
}

// ──────────────────────────────────────────────────────────────────────────────
// Node Handlers
// ──────────────────────────────────────────────────────────────────────────────

func (r *TokenRunner) createToken(node *NodeInfo) {
	tokenID := uuid.New().String()
	elementType := string(node.Type)

	newTask := models.ProcessRequestToken{
		ID:               tokenID,
		ProcessID:        r.ProcessID,
		ProcessRequestID: r.RequestID,
		UserID:           r.UserID,
		ElementID:        node.ID,
		ElementName:      node.Name,
		ElementType:      elementType,
		Status:           "ACTIVE",
	}

	if err := database.DB.Create(&newTask).Error; err != nil {
		log.Printf("[engine] Failed to create token for node %s: %v", node.ID, err)
	} else {
		log.Printf("[engine] ✅ Created token %s for %s (%s)", tokenID[:8], node.Name, node.ID)
	}
}

func (r *TokenRunner) executeScriptTask(node *NodeInfo) {
	log.Printf("[engine] Executing script task: %s", node.Name)

	// Execute the embedded script
	newData, err := ExecuteScript(node.Script, r.Data)
	if err != nil {
		log.Printf("[engine] ⚠️ Script failed for %s: %v", node.ID, err)
		// Continue anyway to not block the process
	} else {
		r.Data = newData
		// Persist the updated data back to the request
		r.syncDataToRequest()
	}

	// Auto-advance to next node
	r.advanceThroughOutgoing(node)
}

func (r *TokenRunner) handleExclusiveGateway(node *NodeInfo) {
	log.Printf("[engine] Evaluating exclusive gateway: %s (%d outgoing)", node.Name, len(node.Outgoing))

	// Evaluate each outgoing flow's condition; take the first that is true
	for _, flowID := range node.Outgoing {
		flow, ok := r.FlowMap[flowID]
		if !ok {
			continue
		}

		// Skip the default flow during condition evaluation
		if flowID == node.DefaultFlow {
			continue
		}

		result, err := EvaluateCondition(flow.ConditionExpression, r.Data)
		if err != nil {
			log.Printf("[engine] ⚠️ Condition eval error on flow %s: %v", flowID, err)
			continue
		}

		if result {
			log.Printf("[engine] Gateway %s → taking flow %s → %s", node.ID, flowID, flow.TargetRef)
			r.ActivateNode(flow.TargetRef)
			return
		}
	}

	// No condition matched; take default flow
	if node.DefaultFlow != "" {
		if flow, ok := r.FlowMap[node.DefaultFlow]; ok {
			log.Printf("[engine] Gateway %s → taking DEFAULT flow → %s", node.ID, flow.TargetRef)
			r.ActivateNode(flow.TargetRef)
			return
		}
	}

	// Fallback: take the first outgoing flow
	if len(node.Outgoing) > 0 {
		if flow, ok := r.FlowMap[node.Outgoing[0]]; ok {
			log.Printf("[engine] Gateway %s → fallback to first flow → %s", node.ID, flow.TargetRef)
			r.ActivateNode(flow.TargetRef)
		}
	}
}

func (r *TokenRunner) handleParallelGateway(node *NodeInfo) {
	log.Printf("[engine] Parallel gateway: %s", node.Name)

	if len(node.Incoming) > 1 {
		// This is a JOIN (converging gateway). Check if all incoming tokens are completed.
		allCompleted := true
		for _, flowID := range node.Incoming {
			flow, ok := r.FlowMap[flowID]
			if !ok {
				continue
			}
			// Check if the source of this flow has a COMPLETED token
			var count int64
			database.DB.Model(&models.ProcessRequestToken{}).
				Where("process_request_id = ? AND element_id = ? AND status = ?",
					r.RequestID, flow.SourceRef, "COMPLETED").
				Count(&count)
			if count == 0 {
				allCompleted = false
				break
			}
		}

		if !allCompleted {
			log.Printf("[engine] Parallel JOIN %s waiting for more tokens", node.ID)
			return // Wait for remaining branches
		}
	}

	// FORK (diverging) or all tokens have arrived at JOIN → activate ALL outgoing
	for _, flowID := range node.Outgoing {
		if flow, ok := r.FlowMap[flowID]; ok {
			r.ActivateNode(flow.TargetRef)
		}
	}
}

func (r *TokenRunner) handleInclusiveGateway(node *NodeInfo) {
	// Inclusive gateway: activate all outgoing flows whose condition is true
	activated := false
	for _, flowID := range node.Outgoing {
		flow, ok := r.FlowMap[flowID]
		if !ok {
			continue
		}

		if flowID == node.DefaultFlow {
			continue
		}

		result, _ := EvaluateCondition(flow.ConditionExpression, r.Data)
		if result {
			r.ActivateNode(flow.TargetRef)
			activated = true
		}
	}

	// If nothing matched, take default
	if !activated && node.DefaultFlow != "" {
		if flow, ok := r.FlowMap[node.DefaultFlow]; ok {
			r.ActivateNode(flow.TargetRef)
		}
	}
}

func (r *TokenRunner) handleEndEvent() {
	log.Printf("[engine] 🏁 Reached EndEvent for request %s", r.RequestID)

	// Check if there are still active tokens in this request
	var activeCount int64
	database.DB.Model(&models.ProcessRequestToken{}).
		Where("process_request_id = ? AND status = ?", r.RequestID, "ACTIVE").
		Count(&activeCount)

	if activeCount == 0 {
		// All branches completed → mark request as COMPLETED
		now := time.Now()
		database.DB.Model(&models.ProcessRequest{}).
			Where("id = ?", r.RequestID).
			Updates(map[string]interface{}{
				"status":       "COMPLETED",
				"completed_at": now,
			})
		log.Printf("[engine] ✅ Request %s marked as COMPLETED", r.RequestID)
	} else {
		log.Printf("[engine] Request %s still has %d active tokens", r.RequestID, activeCount)
	}
}

func (r *TokenRunner) advanceThroughOutgoing(node *NodeInfo) {
	if len(node.Outgoing) == 0 {
		return
	}

	for _, flowID := range node.Outgoing {
		if flow, ok := r.FlowMap[flowID]; ok {
			r.ActivateNode(flow.TargetRef)
		}
	}
}

// syncDataToRequest persists the current data map back to the process_requests table.
func (r *TokenRunner) syncDataToRequest() {
	// The data column in process_requests is a JSON text field
	// For now we store it; a production system would use a proper JSON column
	database.DB.Model(&models.ProcessRequest{}).
		Where("id = ?", r.RequestID).
		Update("data", r.Data)
}
