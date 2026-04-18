package controllers

import (
	"encoding/json"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/engine"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetProcesses handles GET /processes
func GetProcesses(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")
	search := c.Query("search", "")

	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	offset := (page - 1) * perPage

	var processes []models.Process
	var total int64

	query := database.DB.Model(&models.Process{}).Where("status = ?", status)
	if search != "" {
		query = query.Where("name LIKE ?", "%"+search+"%")
	}

	query.Count(&total)
	if err := query.Order("created_at desc").Offset(offset).Limit(perPage).Find(&processes).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch processes"})
	}

	return c.JSON(fiber.Map{
		"data": processes,
		"meta": fiber.Map{
			"current_page": page,
			"per_page":     perPage,
			"total":        total,
			"last_page":    (total + int64(perPage) - 1) / int64(perPage),
		},
	})
}

// GetProcess handles GET /processes/:id
func GetProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}
	return c.JSON(process)
}

// StartProcess handles POST /processes/:id/events/:eventId
// This is the main engine entry point: parse BPMN, create request, walk graph.
func StartProcess(c *fiber.Ctx) error {
	processID := c.Params("id")
	eventID := c.Params("eventId")
	user := c.Locals("user").(models.User)

	// Fetch process
	var process models.Process
	if err := database.DB.Where("id = ?", processID).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	// Parse BPMN
	defs, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(defs.Processes) == 0 {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to parse BPMN XML"})
	}
	bpmnProc := &defs.Processes[0]

	// Validate start event exists
	var startEvent *engine.StartEvent
	for i := range bpmnProc.StartEvents {
		if bpmnProc.StartEvents[i].ID == eventID {
			startEvent = &bpmnProc.StartEvents[i]
			break
		}
	}
	if startEvent == nil {
		return c.Status(400).JSON(fiber.Map{"error": "Start event not found in BPMN"})
	}

	// Parse incoming data from request body
	var inputData map[string]interface{}
	if err := c.BodyParser(&inputData); err != nil {
		inputData = make(map[string]interface{})
	}

	// Create ProcessRequest
	reqID := uuid.New().String()
	now := time.Now()
	newReq := models.ProcessRequest{
		ID:          reqID,
		ProcessID:   processID,
		UserID:      user.ID,
		Name:        process.Name + " #" + reqID[:8],
		Status:      "ACTIVE",
		InitiatedAt: now,
	}

	if err := database.DB.Create(&newReq).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create process request"})
	}

	// Store initial data as JSON in the request
	if len(inputData) > 0 {
		dataJSON, _ := json.Marshal(inputData)
		database.DB.Model(&newReq).Update("data", string(dataJSON))
	}

	// Create token runner and start walking the graph
	runner := engine.NewTokenRunner(processID, reqID, user.ID, bpmnProc, inputData)

	// Follow the outgoing flows from the start event
	for _, flowID := range startEvent.Outgoing {
		flowMap := engine.BuildFlowMap(bpmnProc)
		if flow, ok := flowMap[flowID]; ok {
			runner.ActivateNode(flow.TargetRef)
		}
	}

	return c.Status(201).JSON(fiber.Map{
		"status":  "success",
		"message": "Process started",
		"data":    newReq,
	})
}
