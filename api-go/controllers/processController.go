package controllers

import (
	"encoding/json"
	"fmt"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/engine"
	"github.com/trongtri1512/processmaker-go/models"
)

// ──────────────────────────────────────────────────────────────────────────────
// B1: Process CRUD (GET list/show already exist, plus engine StartProcess)
// ──────────────────────────────────────────────────────────────────────────────

// GetProcesses handles GET /processes
func GetProcesses(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")
	search := c.Query("search", "")

	if page <= 0 {
		page = 1
	}
	if perPage <= 0 {
		perPage = 10
	}
	offset := (page - 1) * perPage

	var processes []models.Process
	var total int64

	query := database.DB.Model(&models.Process{}).Where("status = ?", status)
	if search != "" {
		query = query.Where("name LIKE ?", "%"+search+"%")
	}
	if catID := c.Query("process_category_id", ""); catID != "" {
		query = query.Where("process_category_id = ?", catID)
	}

	query.Count(&total)
	if err := query.Preload("Category").Preload("User").Order("created_at desc").Offset(offset).Limit(perPage).Find(&processes).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch processes"})
	}

	return c.JSON(fiber.Map{
		"data": processes,
		"meta": paginationMeta(page, perPage, total),
	})
}

// GetProcess handles GET /processes/:id
func GetProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Preload("Category").Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}
	return c.JSON(process)
}

// GetStartEvents handles GET /processes/:id/start_events
// Returns the list of start events defined in the BPMN.
func GetStartEvents(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	defs, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(defs.Processes) == 0 {
		return c.JSON(fiber.Map{"data": []interface{}{}})
	}

	type EventInfo struct {
		ID   string `json:"id"`
		Name string `json:"name"`
	}
	var events []EventInfo
	for _, se := range defs.Processes[0].StartEvents {
		events = append(events, EventInfo{ID: se.ID, Name: se.Name})
	}
	return c.JSON(fiber.Map{"data": events})
}

// UpdateProcessDraft handles PUT /processes/:id/draft
// Saves BPMN changes to the draft column without publishing.
func UpdateProcessDraft(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	type Input struct {
		Bpmn string `json:"bpmn"`
	}
	var input Input
	if err := c.BodyParser(&input); err != nil || input.Bpmn == "" {
		return c.Status(400).JSON(fiber.Map{"error": "bpmn field is required"})
	}

	database.DB.Model(&process).Update("bpmn_draft", input.Bpmn)
	return c.JSON(fiber.Map{"status": "success", "message": "Draft saved"})
}

// CloseProcess handles POST /processes/:id/close
// Publishes the draft BPMN (copies bpmn_draft → bpmn), then clears the draft.
func CloseProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	if process.BpmnDraft != "" {
		database.DB.Model(&process).Updates(map[string]interface{}{
			"bpmn":       process.BpmnDraft,
			"bpmn_draft": "",
		})
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Process published"})
}

// DuplicateProcess handles PUT /processes/:id/duplicate
func DuplicateProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var original models.Process
	if err := database.DB.Where("id = ?", id).First(&original).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	type Input struct {
		Name string `json:"name"`
	}
	var input Input
	c.BodyParser(&input)
	name := input.Name
	if name == "" {
		name = "Copy of " + original.Name
	}

	dup := models.Process{
		ID:                uuid.New().String(),
		Name:              name,
		Description:       original.Description,
		ProcessCategoryID: original.ProcessCategoryID,
		UserID:            original.UserID,
		Status:            "ACTIVE",
		Bpmn:              original.Bpmn,
		Properties:        original.Properties,
	}

	if err := database.DB.Create(&dup).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to duplicate"})
	}
	return c.Status(201).JSON(dup)
}

// DownloadBpmn handles GET /processes/:id/bpmn
// Returns raw BPMN XML as downloadable file.
func DownloadBpmn(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	c.Set("Content-Type", "application/xml")
	c.Set("Content-Disposition", fmt.Sprintf("attachment; filename=\"%s.bpmn\"", process.Name))
	return c.SendString(process.Bpmn)
}

// ExportProcess handles POST /processes/:id/export
// Exports process definition + related data as JSON.
func ExportProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	// Gather related task assignments
	var assignments []models.ProcessTaskAssignment
	database.DB.Where("process_id = ?", process.ID).Find(&assignments)

	export := fiber.Map{
		"type":             "process_package",
		"version":          "1.0",
		"process":          process,
		"task_assignments": assignments,
	}

	return c.JSON(export)
}

// ImportProcess handles POST /processes/import
// Imports a process from a JSON export.
func ImportProcess(c *fiber.Ctx) error {
	type ImportPayload struct {
		Process         models.Process                 `json:"process"`
		TaskAssignments []models.ProcessTaskAssignment `json:"task_assignments"`
	}

	var payload ImportPayload
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid import payload"})
	}

	// Create with new ID
	payload.Process.ID = uuid.New().String()
	payload.Process.Name = payload.Process.Name + " (Imported)"
	payload.Process.Status = "ACTIVE"

	if err := database.DB.Create(&payload.Process).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to import process"})
	}

	// Re-link task assignments
	for i := range payload.TaskAssignments {
		payload.TaskAssignments[i].ID = 0        // Auto-increment
		payload.TaskAssignments[i].ProcessID = 0 // Will need to be set from UUID
		database.DB.Create(&payload.TaskAssignments[i])
	}

	return c.Status(201).JSON(fiber.Map{
		"status":  "success",
		"message": "Process imported",
		"process": payload.Process,
	})
}

// StartProcess handles POST /processes/:id/events/:eventId
// This is the main engine entry point.
func StartProcess(c *fiber.Ctx) error {
	processID := c.Params("id")
	eventID := c.Params("eventId")
	user := c.Locals("user").(models.User)

	var process models.Process
	if err := database.DB.Where("id = ?", processID).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	defs, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(defs.Processes) == 0 {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to parse BPMN XML"})
	}
	bpmnProc := &defs.Processes[0]

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

	var inputData map[string]interface{}
	if err := c.BodyParser(&inputData); err != nil {
		inputData = make(map[string]interface{})
	}

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

	if len(inputData) > 0 {
		dataJSON, _ := json.Marshal(inputData)
		database.DB.Model(&newReq).Update("data", string(dataJSON))
	}

	runner := engine.NewTokenRunner(processID, reqID, user.ID, bpmnProc, inputData)
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

// ──────────────────────────────────────────────────────────────────────────────
// B3: Process Task Assignments
// ──────────────────────────────────────────────────────────────────────────────

func GetTaskAssignments(c *fiber.Ctx) error {
	processID := c.Query("process_id", "")

	var items []models.ProcessTaskAssignment
	query := database.DB.Model(&models.ProcessTaskAssignment{})
	if processID != "" {
		query = query.Where("process_id = ?", processID)
	}
	query.Order("created_at desc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func CreateTaskAssignment(c *fiber.Ctx) error {
	var item models.ProcessTaskAssignment
	if err := c.BodyParser(&item); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid body"})
	}
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateTaskAssignment(c *fiber.Ctx) error {
	id := c.Params("id")
	var item models.ProcessTaskAssignment
	if err := database.DB.First(&item, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteTaskAssignment(c *fiber.Ctx) error {
	id := c.Params("id")
	result := database.DB.Delete(&models.ProcessTaskAssignment{}, id)
	if result.RowsAffected == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// B4: Process Launchpad
// ──────────────────────────────────────────────────────────────────────────────

func GetLaunchpads(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)

	var items []models.ProcessLaunchpad
	query := database.DB.Preload("Process")
	if !user.IsAdministrator {
		query = query.Where("user_id = ?", user.ID)
	}
	query.Order("created_at desc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func CreateLaunchpad(c *fiber.Ctx) error {
	var item models.ProcessLaunchpad
	if err := c.BodyParser(&item); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid body"})
	}
	item.ID = uuid.New().String()
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateLaunchpad(c *fiber.Ctx) error {
	id := c.Params("id")
	var item models.ProcessLaunchpad
	if err := database.DB.Where("id = ?", id).First(&item).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteLaunchpad(c *fiber.Ctx) error {
	id := c.Params("id")
	result := database.DB.Where("id = ?", id).Delete(&models.ProcessLaunchpad{})
	if result.RowsAffected == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(fiber.Map{"status": "success"})
}
