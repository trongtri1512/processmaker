package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetUsers handles fetching users
func GetUsers(c *fiber.Ctx) error {
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

	var users []models.User
	var total int64

	query := database.DB.Model(&models.User{}).Where("status = ?", status)

	if search != "" {
		searchParam := "%" + search + "%"
		query = query.Where("username LIKE ? OR firstname LIKE ? OR lastname LIKE ? OR email LIKE ?", 
			searchParam, searchParam, searchParam, searchParam)
	}

	query.Count(&total)

	if err := query.Order("created_at desc").
		Offset(offset).
		Limit(perPage).
		Find(&users).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to fetch users",
		})
	}

	return c.JSON(fiber.Map{
		"data": users,
		"meta": fiber.Map{
			"current_page": page,
			"per_page":     perPage,
			"total":        total,
			"last_page":    (total + int64(perPage) - 1) / int64(perPage),
		},
	})
}
