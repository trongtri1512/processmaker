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

	if page <= 0 {
		page = 1
	}
	if perPage <= 0 {
		perPage = 10
	}
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

func UpdateRequest(c *fiber.Ctx) error {
	id := c.Params("id")
	var req models.ProcessRequest
	if err := database.DB.Where("id = ?", id).First(&req).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&req).Updates(updates)
	return c.JSON(req)
}

func DeleteRequest(c *fiber.Ctx) error {
	id := c.Params("id")
	var req models.ProcessRequest
	if err := database.DB.Where("id = ?", id).First(&req).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	// Soft delete the request and its status
	req.Status = "CANCELED"
	database.DB.Save(&req)
	database.DB.Delete(&req) // GORM soft delete
	return c.JSON(fiber.Map{"status": "success", "message": "Request canceled and deleted"})
}

func RetryRequest(c *fiber.Ctx) error {
	id := c.Params("id")
	var req models.ProcessRequest
	if err := database.DB.Where("id = ?", id).First(&req).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	// Mock retry logic
	req.Status = "ACTIVE"
	database.DB.Save(&req)
	return c.JSON(fiber.Map{"status": "success", "message": "Request retried"})
}

func GetRequestTokens(c *fiber.Ctx) error {
	id := c.Params("id")
	var tokens []models.ProcessRequestToken
	database.DB.Where("process_request_id = ? AND status = ?", id, "ACTIVE").Find(&tokens)
	return c.JSON(fiber.Map{"data": tokens})
}

func GetRequestDetailsScreen(c *fiber.Ctx) error {
	// Return a placeholder or empty screen unless there's a custom display screen mapped
	return c.JSON(fiber.Map{"data": nil})
}

func GetRequestEndEventDestination(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"destination": nil})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase E: Request Files (Media)
// ──────────────────────────────────────────────────────────────────────────────

func GetRequestFiles(c *fiber.Ctx) error {
	id := c.Params("id")
	var items []models.Media
	database.DB.Where("model_type = ? AND model_id = ?", "ProcessMaker\\Models\\ProcessRequest", id).
		Order("created_at desc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetRequestFile(c *fiber.Ctx) error {
	id := c.Params("id")
	fileID := c.Params("file")
	var item models.Media
	if err := database.DB.Where("id = ? AND model_id = ?", fileID, id).First(&item).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func UploadRequestFile(c *fiber.Ctx) error {
	id := c.Params("id")
	file, err := c.FormFile("file")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "No file uploaded"})
	}

	// Just a mock save logic for Parity
	media := models.Media{
		ModelType:      "ProcessMaker\\Models\\ProcessRequest",
		ModelID:        id,
		CollectionName: "default",
		Name:           file.Filename,
		FileName:       file.Filename,
		Disk:           "public",
		Size:           file.Size,
	}
	database.DB.Create(&media)

	return c.Status(201).JSON(media)
}

func DeleteRequestFile(c *fiber.Ctx) error {
	fileID := c.Params("file")
	database.DB.Delete(&models.Media{}, fileID)
	return c.JSON(fiber.Map{"status": "success"})
}
