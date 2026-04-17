package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetRequests handles fetching user's process requests
func GetRequests(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)

	// Pagination variables
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE") // Default process request status

	if page <= 0 {
		page = 1
	}
	if perPage <= 0 {
		perPage = 10
	}
	offset := (page - 1) * perPage

	var requests []models.ProcessRequest
	var total int64

	// Base query Builder
	query := database.DB.Model(&models.ProcessRequest{}).Where("status = ?", status)

	// Admin sees all, normal users see only requests they initiated
	if !user.IsAdministrator {
		query = query.Where("user_id = ?", user.ID)
	}

	// Count total records
	query.Count(&total)

	// Retrieve paginated records
	if err := query.Preload("User").
		Order("created_at desc").
		Offset(offset).
		Limit(perPage).
		Find(&requests).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to fetch process requests",
		})
	}

	return c.JSON(fiber.Map{
		"data": requests,
		"meta": fiber.Map{
			"current_page": page,
			"per_page":     perPage,
			"total":        total,
			"last_page":    (total + int64(perPage) - 1) / int64(perPage),
		},
	})
}
