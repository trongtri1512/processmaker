package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetRequests handles GET /requests
func GetRequests(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)

	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")

	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	offset := (page - 1) * perPage

	var requests []models.ProcessRequest
	var total int64

	query := database.DB.Model(&models.ProcessRequest{}).Where("status = ?", status)
	if !user.IsAdministrator {
		query = query.Where("user_id = ?", user.ID)
	}

	query.Count(&total)

	if err := query.Preload("User").Preload("Process").
		Order("created_at desc").Offset(offset).Limit(perPage).
		Find(&requests).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch requests"})
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

// GetRequest handles GET /requests/:id
func GetRequest(c *fiber.Ctx) error {
	id := c.Params("id")
	var req models.ProcessRequest
	if err := database.DB.Preload("User").Preload("Process").
		Where("id = ?", id).First(&req).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Request not found"})
	}
	return c.JSON(req)
}
