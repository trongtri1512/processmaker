package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
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
