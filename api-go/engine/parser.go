package engine

import (
	"encoding/xml"
)

// ──────────────────────────────────────────────────────────────────────────────
// BPMN 2.0 XML Structures
// ──────────────────────────────────────────────────────────────────────────────

// Definitions is the root element of a BPMN 2.0 XML document.
type Definitions struct {
	XMLName   xml.Name   `xml:"definitions"`
	Processes []BProcess `xml:"process"`
}

// BProcess represents a <bpmn:process> element containing all nodes and flows.
type BProcess struct {
	ID                string             `xml:"id,attr"`
	Name              string             `xml:"name,attr"`
	IsExecutable      bool               `xml:"isExecutable,attr"`
	StartEvents       []StartEvent       `xml:"startEvent"`
	EndEvents         []EndEvent         `xml:"endEvent"`
	UserTasks         []UserTask         `xml:"userTask"`
	ManualTasks       []ManualTask       `xml:"manualTask"`
	ServiceTasks      []ServiceTask      `xml:"serviceTask"`
	ScriptTasks       []ScriptTask       `xml:"scriptTask"`
	SendTasks         []SendTask         `xml:"sendTask"`
	SequenceFlows     []SequenceFlow     `xml:"sequenceFlow"`
	ExclusiveGateways []ExclusiveGateway `xml:"exclusiveGateway"`
	ParallelGateways  []ParallelGateway  `xml:"parallelGateway"`
	InclusiveGateways []InclusiveGateway `xml:"inclusiveGateway"`
	IntermediateCatchEvents []IntermediateCatchEvent `xml:"intermediateCatchEvent"`
	IntermediateThrowEvents []IntermediateThrowEvent `xml:"intermediateThrowEvent"`
	SubProcesses      []SubProcess       `xml:"subProcess"`
	CallActivities    []CallActivity     `xml:"callActivity"`
	TextAnnotations   []TextAnnotation   `xml:"textAnnotation"`
	Associations      []Association      `xml:"association"`
}

// ──────────────────────────────────────────────────────────────────────────────
// Events
// ──────────────────────────────────────────────────────────────────────────────

type StartEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Outgoing []string `xml:"outgoing"`
}

type EndEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
}

type IntermediateCatchEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type IntermediateThrowEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

// ──────────────────────────────────────────────────────────────────────────────
// Activities / Tasks
// ──────────────────────────────────────────────────────────────────────────────

type UserTask struct {
	ID             string   `xml:"id,attr"`
	Name           string   `xml:"name,attr"`
	Implementation string   `xml:"implementation,attr"`
	Incoming       []string `xml:"incoming"`
	Outgoing       []string `xml:"outgoing"`
	// ProcessMaker extensions
	Assignment string `xml:"assignment,attr"`
	AssignedUsers string `xml:"assignedUsers,attr"`
}

type ManualTask struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type ServiceTask struct {
	ID             string   `xml:"id,attr"`
	Name           string   `xml:"name,attr"`
	Implementation string   `xml:"implementation,attr"`
	Incoming       []string `xml:"incoming"`
	Outgoing       []string `xml:"outgoing"`
}

type ScriptTask struct {
	ID             string   `xml:"id,attr"`
	Name           string   `xml:"name,attr"`
	ScriptFormat   string   `xml:"scriptFormat,attr"`
	Script         string   `xml:"script"`
	Incoming       []string `xml:"incoming"`
	Outgoing       []string `xml:"outgoing"`
}

type SendTask struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type SubProcess struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type CallActivity struct {
	ID              string   `xml:"id,attr"`
	Name            string   `xml:"name,attr"`
	CalledElement   string   `xml:"calledElement,attr"`
	Incoming        []string `xml:"incoming"`
	Outgoing        []string `xml:"outgoing"`
}

// ──────────────────────────────────────────────────────────────────────────────
// Gateways
// ──────────────────────────────────────────────────────────────────────────────

type ExclusiveGateway struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Default  string   `xml:"default,attr"` // Default sequence flow ID
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type ParallelGateway struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type InclusiveGateway struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Default  string   `xml:"default,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

// ──────────────────────────────────────────────────────────────────────────────
// Flows & Annotations
// ──────────────────────────────────────────────────────────────────────────────

type SequenceFlow struct {
	ID                  string `xml:"id,attr"`
	Name                string `xml:"name,attr"`
	SourceRef           string `xml:"sourceRef,attr"`
	TargetRef           string `xml:"targetRef,attr"`
	ConditionExpression string `xml:"conditionExpression"`
}

type TextAnnotation struct {
	ID   string `xml:"id,attr"`
	Text string `xml:"text"`
}

type Association struct {
	ID        string `xml:"id,attr"`
	SourceRef string `xml:"sourceRef,attr"`
	TargetRef string `xml:"targetRef,attr"`
}

// ──────────────────────────────────────────────────────────────────────────────
// NodeInfo is a unified view of any BPMN element for the engine to consume.
// ──────────────────────────────────────────────────────────────────────────────

type NodeType string

const (
	NodeStartEvent              NodeType = "startEvent"
	NodeEndEvent                NodeType = "endEvent"
	NodeUserTask                NodeType = "userTask"
	NodeManualTask              NodeType = "manualTask"
	NodeServiceTask             NodeType = "serviceTask"
	NodeScriptTask              NodeType = "scriptTask"
	NodeSendTask                NodeType = "sendTask"
	NodeExclusiveGateway        NodeType = "exclusiveGateway"
	NodeParallelGateway         NodeType = "parallelGateway"
	NodeInclusiveGateway        NodeType = "inclusiveGateway"
	NodeIntermediateCatchEvent  NodeType = "intermediateCatchEvent"
	NodeIntermediateThrowEvent  NodeType = "intermediateThrowEvent"
	NodeSubProcess              NodeType = "subProcess"
	NodeCallActivity            NodeType = "callActivity"
)

type NodeInfo struct {
	ID       string
	Name     string
	Type     NodeType
	Outgoing []string
	Incoming []string
	// Gateway-specific
	DefaultFlow string
	// ScriptTask-specific
	Script       string
	ScriptFormat string
}

// ──────────────────────────────────────────────────────────────────────────────
// Parser
// ──────────────────────────────────────────────────────────────────────────────

// ParseBPMN takes raw XML bytes and produces a Definitions struct.
func ParseBPMN(xmlData []byte) (*Definitions, error) {
	var definitions Definitions
	err := xml.Unmarshal(xmlData, &definitions)
	if err != nil {
		return nil, err
	}
	return &definitions, nil
}

// BuildNodeMap creates an O(1) lookup map of element ID → NodeInfo for fast traversal.
func BuildNodeMap(proc *BProcess) map[string]*NodeInfo {
	m := make(map[string]*NodeInfo)

	for _, e := range proc.StartEvents {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeStartEvent, Outgoing: e.Outgoing}
	}
	for _, e := range proc.EndEvents {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeEndEvent, Incoming: e.Incoming}
	}
	for _, e := range proc.UserTasks {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeUserTask, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.ManualTasks {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeManualTask, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.ServiceTasks {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeServiceTask, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.ScriptTasks {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeScriptTask, Incoming: e.Incoming, Outgoing: e.Outgoing, Script: e.Script, ScriptFormat: e.ScriptFormat}
	}
	for _, e := range proc.SendTasks {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeSendTask, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.ExclusiveGateways {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeExclusiveGateway, Incoming: e.Incoming, Outgoing: e.Outgoing, DefaultFlow: e.Default}
	}
	for _, e := range proc.ParallelGateways {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeParallelGateway, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.InclusiveGateways {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeInclusiveGateway, Incoming: e.Incoming, Outgoing: e.Outgoing, DefaultFlow: e.Default}
	}
	for _, e := range proc.IntermediateCatchEvents {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeIntermediateCatchEvent, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.IntermediateThrowEvents {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeIntermediateThrowEvent, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.SubProcesses {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeSubProcess, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}
	for _, e := range proc.CallActivities {
		m[e.ID] = &NodeInfo{ID: e.ID, Name: e.Name, Type: NodeCallActivity, Incoming: e.Incoming, Outgoing: e.Outgoing}
	}

	return m
}

// BuildFlowMap creates an O(1) lookup map of flow ID → SequenceFlow.
func BuildFlowMap(proc *BProcess) map[string]*SequenceFlow {
	m := make(map[string]*SequenceFlow)
	for i := range proc.SequenceFlows {
		m[proc.SequenceFlows[i].ID] = &proc.SequenceFlows[i]
	}
	return m
}
