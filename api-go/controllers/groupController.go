package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetGroups handles fetching groups
func GetGroups(c *fiber.Ctx) error {
	// Pagination variables
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

	var groups []models.Group
	var total int64

	query := database.DB.Model(&models.Group{}).Where("status = ?", status)

	if search != "" {
		searchParam := "%" + search + "%"
		query = query.Where("name LIKE ?", searchParam)
	}

	query.Count(&total)

	if err := query.Order("created_at desc").
		Offset(offset).
		Limit(perPage).
		Find(&groups).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to fetch groups",
		})
	}

	return c.JSON(fiber.Map{
		"data": groups,
		"meta": fiber.Map{
			"current_page": page,
			"per_page":     perPage,
			"total":        total,
			"last_page":    (total + int64(perPage) - 1) / int64(perPage),
		},
	})
}
