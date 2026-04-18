package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/engine"
	"github.com/trongtri1512/processmaker-go/models"
)

// StartProcess handles POST /processes/:id/events/:eventId
func StartProcess(c *fiber.Ctx) error {
	processID := c.Params("id")
	eventID := c.Params("eventId") // The StartEvent ID in the BPMN
	user := c.Locals("user").(models.User)

	// Fetch process from database to get BPMN XML
	var process models.Process
	if err := database.DB.Where("id = ?", processID).First(&process).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Process not found"})
	}

	// Parse BPMN
	parsedXML, err := engine.ParseBPMN([]byte(process.Bpmn))
	if err != nil || len(parsedXML.Processes) == 0 {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Failed to parse BPMN"})
	}

	bpmnProcess := parsedXML.Processes[0]

	// Find the start event
	var startEvent *engine.StartEvent
	for _, event := range bpmnProcess.StartEvents {
		if event.ID == eventID {
			startEvent = &event
			break
		}
	}

	if startEvent == nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Start Event not found in BPMN"})
	}

	// Create a new Process Request
	reqID := uuid.New().String()
	newRequest := models.ProcessRequest{
		ID:        reqID,
		ProcessID: processID,
		UserID:    user.ID,
		Name:      process.Name + " #" + reqID[:8],
		Status:    "ACTIVE",
	}

	if err := database.DB.Create(&newRequest).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Could not create Process Request"})
	}

	// Start moving the token!
	// Follow the outgoing flow from the start event
	if len(startEvent.Outgoing) > 0 {
		flowID := startEvent.Outgoing[0]
		
		// Find target of this flow
		var targetRef string
		for _, flow := range bpmnProcess.SequenceFlows {
			if flow.ID == flowID {
				targetRef = flow.TargetRef
				break
			}
		}

		if targetRef != "" {
			// Check if target is a User Task
			var targetTask *engine.UserTask
			for _, task := range bpmnProcess.UserTasks {
				if task.ID == targetRef {
					targetTask = &task
					break
				}
			}

			if targetTask != nil {
				// We reached a User Task, create a token
				tokenID := uuid.New().String()
				newTask := models.ProcessRequestToken{
					ID:               tokenID,
					ProcessID:        processID,
					ProcessRequestID: reqID,
					UserID:           user.ID, // Simplified assignment for now
					ElementID:        targetTask.ID,
					ElementName:      targetTask.Name,
					ElementType:      "userTask",
					Status:           "ACTIVE",
				}
				database.DB.Create(&newTask)
			}
		}
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Process started successfully",
		"data":    newRequest,
	})
}
