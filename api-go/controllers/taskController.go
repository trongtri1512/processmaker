package controllers

import (
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/engine"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetTasks handles fetching user's tasks
func GetTasks(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)

	// Pagination variables
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")

	if page <= 0 {
		page = 1
	}
	if perPage <= 0 {
		perPage = 10
	}
	offset := (page - 1) * perPage

	var tasks []models.ProcessRequestToken
	var total int64

	// Base query Builder
	// We only show tokens of "task" or "userTask"
	query := database.DB.Model(&models.ProcessRequestToken{}).
		Where("element_type IN ?", []string{"task", "userTask"}).
		Where("status = ?", status)

	// Admin sees all, normal users see only their assigned
	if !user.IsAdministrator {
		query = query.Where("user_id = ?", user.ID)
	}

	// Count total records
	query.Count(&total)

	// Retrieve paginated records with preloaded associations
	if err := query.Preload("User").Preload("ProcessRequest").
		Order("created_at desc").
		Offset(offset).
		Limit(perPage).
		Find(&tasks).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to fetch tasks",
		})
	}

	// Format response to match ProcessMaker API style
	// Go maps nicely to JSON
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

// CompleteTask handles PUT /tasks/:id
func CompleteTask(c *fiber.Ctx) error {
	taskID := c.Params("id")
	user := c.Locals("user").(models.User)

	var task models.ProcessRequestToken
	if err := database.DB.Where("id = ?", taskID).First(&task).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Task not found"})
	}

	// Security: Only assigned user or admin can complete
	if !user.IsAdministrator && task.UserID != user.ID {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{"error": "Not authorized to complete this task"})
	}

	if task.Status == "COMPLETED" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Task is already completed"})
	}

	// Update task status
	now := time.Now()
	task.Status = "COMPLETED"
	task.CompletedAt = &now
	database.DB.Save(&task)

	// Fetch Process Request and Process to move token
	var req models.ProcessRequest
	var process models.Process
	if err := database.DB.Where("id = ?", task.ProcessRequestID).First(&req).Error; err == nil {
		if err := database.DB.Where("id = ?", task.ProcessID).First(&process).Error; err == nil {
			advanceToken(process, req, task.ElementID, user.ID)
		}
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Task completed successfully",
		"data":    task,
	})
}

func advanceToken(process models.Process, req models.ProcessRequest, currentElementID string, userID uint) {
	// Parse BPMN
	parsedXML, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(parsedXML.Processes) == 0 {
		return
	}

	bpmnProcess := parsedXML.Processes[0]

	// Find the outgoing flow from the current element
	var targetRef string
	// Search UserTasks to find current
	for _, ut := range bpmnProcess.UserTasks {
		if ut.ID == currentElementID && len(ut.Outgoing) > 0 {
			flowID := ut.Outgoing[0]
			// Find flow target
			for _, flow := range bpmnProcess.SequenceFlows {
				if flow.ID == flowID {
					targetRef = flow.TargetRef
					break
				}
			}
			break
		}
	}

	if targetRef == "" {
		return // No where to go or reached end logically
	}

	// Determine what targetRef is
	// Is it a UserTask?
	for _, task := range bpmnProcess.UserTasks {
		if task.ID == targetRef {
			// Spawn new task
			tokenID := uuid.New().String()
			newTask := models.ProcessRequestToken{
				ID:               tokenID,
				ProcessID:        process.ID,
				ProcessRequestID: req.ID,
				UserID:           userID, // Assigning to same user for simplicity
				ElementID:        task.ID,
				ElementName:      task.Name,
				ElementType:      "userTask",
				Status:           "ACTIVE",
			}
			database.DB.Create(&newTask)
			return
		}
	}

	// Is it an End Event?
	for _, end := range bpmnProcess.EndEvents {
		if end.ID == targetRef {
			// Mark Request as COMPLETED
			now := time.Now()
			req.Status = "COMPLETED"
			req.CompletedAt = &now
			database.DB.Save(&req)
			return
		}
	}
}
