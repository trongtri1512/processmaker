package controllers

import (
	"encoding/json"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/engine"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetTasks handles GET /tasks
func GetTasks(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)

	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")

	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	offset := (page - 1) * perPage

	var tasks []models.ProcessRequestToken
	var total int64

	query := database.DB.Model(&models.ProcessRequestToken{}).
		Where("element_type IN ?", []string{"task", "userTask", "manualTask"}).
		Where("status = ?", status)

	if !user.IsAdministrator {
		query = query.Where("user_id = ?", user.ID)
	}

	query.Count(&total)

	if err := query.Preload("User").Preload("ProcessRequest").
		Order("created_at desc").Offset(offset).Limit(perPage).
		Find(&tasks).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch tasks"})
	}

	return c.JSON(fiber.Map{
		"data": tasks,
		"meta": fiber.Map{
			"current_page": page,
			"per_page":     perPage,
			"total":        total,
			"last_page":    (total + int64(perPage) - 1) / int64(perPage),
		},
	})
}

// GetTask handles GET /tasks/:id
func GetTask(c *fiber.Ctx) error {
	taskID := c.Params("id")
	var task models.ProcessRequestToken
	if err := database.DB.Preload("User").Preload("ProcessRequest").
		Where("id = ?", taskID).First(&task).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Task not found"})
	}
	return c.JSON(task)
}

// CompleteTask handles PUT /tasks/:id
// Marks a task as COMPLETED and advances the token through the BPMN graph.
func CompleteTask(c *fiber.Ctx) error {
	taskID := c.Params("id")
	user := c.Locals("user").(models.User)

	var task models.ProcessRequestToken
	if err := database.DB.Where("id = ?", taskID).First(&task).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Task not found"})
	}

	// Authorization check
	if !user.IsAdministrator && task.UserID != user.ID {
		return c.Status(403).JSON(fiber.Map{"error": "Not authorized to complete this task"})
	}

	if task.Status != "ACTIVE" {
		return c.Status(400).JSON(fiber.Map{"error": "Task is not in ACTIVE status"})
	}

	// Parse submitted data from form
	var submittedData map[string]interface{}
	if err := c.BodyParser(&submittedData); err != nil {
		submittedData = make(map[string]interface{})
	}

	// Mark task as COMPLETED
	now := time.Now()
	task.Status = "COMPLETED"
	task.CompletedAt = &now
	database.DB.Save(&task)

	// Merge submitted data into process request data
	var req models.ProcessRequest
	var process models.Process
	if err := database.DB.Where("id = ?", task.ProcessRequestID).First(&req).Error; err != nil {
		return c.JSON(fiber.Map{"status": "success", "data": task})
	}
	if err := database.DB.Where("id = ?", task.ProcessID).First(&process).Error; err != nil {
		return c.JSON(fiber.Map{"status": "success", "data": task})
	}

	// Load existing request data and merge with submitted data
	existingData := make(map[string]interface{})
	if req.Data != "" {
		json.Unmarshal([]byte(req.Data), &existingData)
	}
	for k, v := range submittedData {
		existingData[k] = v
	}

	// Persist merged data
	mergedJSON, _ := json.Marshal(existingData)
	database.DB.Model(&req).Update("data", string(mergedJSON))

	// Parse BPMN and advance token
	defs, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(defs.Processes) == 0 {
		return c.JSON(fiber.Map{"status": "success", "data": task})
	}
	bpmnProc := &defs.Processes[0]

	// Create runner with merged data and advance from the completed task's outgoing flows
	runner := engine.NewTokenRunner(process.ID, req.ID, user.ID, bpmnProc, existingData)

	node, ok := runner.NodeMap[task.ElementID]
	if ok {
		for _, flowID := range node.Outgoing {
			if flow, fOk := runner.FlowMap[flowID]; fOk {
				runner.ActivateNode(flow.TargetRef)
			}
		}
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Task completed",
		"data":    task,
	})
}
