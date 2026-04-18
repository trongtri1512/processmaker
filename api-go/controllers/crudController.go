package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// ──────────────────────────────────────────────────────────────────────────────
// Generic CRUD helpers
// ──────────────────────────────────────────────────────────────────────────────

func genericList(c *fiber.Ctx, model interface{}, searchFields ...string) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	search := c.Query("search", "")
	status := c.Query("status", "")

	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	offset := (page - 1) * perPage

	var total int64
	query := database.DB.Model(model)
	if status != "" {
		query = query.Where("status = ?", status)
	}
	if search != "" && len(searchFields) > 0 {
		s := "%" + search + "%"
		q := searchFields[0] + " LIKE ?"
		args := []interface{}{s}
		for _, f := range searchFields[1:] {
			q += " OR " + f + " LIKE ?"
			args = append(args, s)
		}
		query = query.Where(q, args...)
	}

	query.Count(&total)
	if err := query.Order("created_at desc").Offset(offset).Limit(perPage).Find(model).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch"})
	}

	return c.JSON(fiber.Map{
		"data": model,
		"meta": paginationMeta(page, perPage, total),
	})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase B: Process CRUD
// ──────────────────────────────────────────────────────────────────────────────

// CreateProcess handles POST /processes
func CreateProcess(c *fiber.Ctx) error {
	type Input struct {
		Name              string `json:"name"`
		Description       string `json:"description"`
		ProcessCategoryID string `json:"process_category_id"`
		Status            string `json:"status"`
	}
	var input Input
	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
	if input.Name == "" {
		return c.Status(422).JSON(fiber.Map{"error": "name is required"})
	}

	status := input.Status
	if status == "" { status = "ACTIVE" }

	// Default BPMN template
	bpmn := `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL">
  <bpmn:process id="Process_1" isExecutable="true">
    <bpmn:startEvent id="node_1" name="Start Event" />
  </bpmn:process>
</bpmn:definitions>`

	process := models.Process{
		Name:              input.Name,
		Description:       input.Description,
		ProcessCategoryID: input.ProcessCategoryID,
		Status:            status,
		Bpmn:              bpmn,
	}

	if err := database.DB.Create(&process).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create process"})
	}
	return c.Status(201).JSON(process)
}

// UpdateProcess handles PUT /processes/:id
func UpdateProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}

	var updates map[string]interface{}
	if err := c.BodyParser(&updates); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
	delete(updates, "id")

	database.DB.Model(&process).Updates(updates)
	database.DB.First(&process, "id = ?", id)
	return c.JSON(process)
}

// DeleteProcess handles DELETE /processes/:id
func DeleteProcess(c *fiber.Ctx) error {
	id := c.Params("id")
	var process models.Process
	if err := database.DB.Where("id = ?", id).First(&process).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Process not found"})
	}
	database.DB.Delete(&process)
	return c.JSON(fiber.Map{"status": "success", "message": "Process deleted"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase B2: Process Categories
// ──────────────────────────────────────────────────────────────────────────────

func GetProcessCategories(c *fiber.Ctx) error {
	var cats []models.ProcessCategory
	query := database.DB.Order("name asc")
	if s := c.Query("status", ""); s != "" {
		query = query.Where("status = ?", s)
	}
	query.Find(&cats)
	return c.JSON(fiber.Map{"data": cats})
}

func GetProcessCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var cat models.ProcessCategory
	if err := database.DB.First(&cat, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(cat)
}

func CreateProcessCategory(c *fiber.Ctx) error {
	var cat models.ProcessCategory
	if err := c.BodyParser(&cat); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid body"})
	}
	if cat.Status == "" { cat.Status = "ACTIVE" }
	database.DB.Create(&cat)
	return c.Status(201).JSON(cat)
}

func UpdateProcessCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var cat models.ProcessCategory
	if err := database.DB.First(&cat, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&cat).Updates(updates)
	return c.JSON(cat)
}

func DeleteProcessCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	database.DB.Delete(&models.ProcessCategory{}, id)
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase C1: Screens
// ──────────────────────────────────────────────────────────────────────────────

func GetScreens(c *fiber.Ctx) error {
	var items []models.Screen
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	var total int64
	query := database.DB.Model(&models.Screen{})
	if s := c.Query("type", ""); s != "" { query = query.Where("type = ?", s) }
	if s := c.Query("status", ""); s != "" { query = query.Where("status = ?", s) }
	if s := c.Query("screen_category_id", ""); s != "" {
		query = query.Where("screen_category_id = ?", s)
	}
	if s := c.Query("search", ""); s != "" {
		f := "%" + s + "%"
		query = query.Where("title LIKE ? OR description LIKE ?", f, f)
	}
	query.Count(&total)
	query.Preload("Category").Order("created_at desc").Offset((page-1)*perPage).Limit(perPage).Find(&items)
	return c.JSON(fiber.Map{"data": items, "meta": paginationMeta(page, perPage, total)})
}

func GetScreen(c *fiber.Ctx) error {
	var item models.Screen
	if err := database.DB.Preload("Category").First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateScreen(c *fiber.Ctx) error {
	var item models.Screen
	c.BodyParser(&item)
	if item.Title == "" {
		return c.Status(422).JSON(fiber.Map{"error": "title is required"})
	}
	if item.Type == "" { item.Type = "FORM" }
	if item.Status == "" { item.Status = "ACTIVE" }
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateScreen(c *fiber.Ctx) error {
	var item models.Screen
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	database.DB.First(&item, c.Params("id"))
	return c.JSON(item)
}

func DeleteScreen(c *fiber.Ctx) error {
	database.DB.Delete(&models.Screen{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

// UpdateScreenDraft handles PUT /screens/:id/draft
func UpdateScreenDraft(c *fiber.Ctx) error {
	var item models.Screen
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	// Store draft data - the frontend sends config/computed/watchers/custom_css
	database.DB.Model(&item).Updates(updates)
	return c.JSON(fiber.Map{"status": "success", "message": "Draft saved"})
}

// CloseScreen handles POST /screens/:id/close
func CloseScreen(c *fiber.Ctx) error {
	var item models.Screen
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	// Closing a screen just means the editing session is over
	return c.JSON(fiber.Map{"status": "success", "message": "Screen closed"})
}

// DuplicateScreen handles PUT /screens/:id/duplicate
func DuplicateScreen(c *fiber.Ctx) error {
	var original models.Screen
	if err := database.DB.First(&original, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}

	type Input struct {
		Title string `json:"title"`
	}
	var input Input
	c.BodyParser(&input)
	title := input.Title
	if title == "" {
		title = "Copy of " + original.Title
	}

	dup := models.Screen{
		Title:       title,
		Description: original.Description,
		Type:        original.Type,
		Config:      original.Config,
		Computed:    original.Computed,
		Watchers:    original.Watchers,
		CustomCSS:   original.CustomCSS,
		Status:      "ACTIVE",
		CategoryID:  original.CategoryID,
	}
	database.DB.Create(&dup)
	return c.Status(201).JSON(dup)
}

// ExportScreen handles POST /screens/:id/export
func ExportScreen(c *fiber.Ctx) error {
	var item models.Screen
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	export := fiber.Map{
		"type":    "screen_package",
		"version": "1.0",
		"screen":  item,
	}
	return c.JSON(export)
}

// ImportScreen handles POST /screens/import
func ImportScreen(c *fiber.Ctx) error {
	type Payload struct {
		Screen models.Screen `json:"screen"`
	}
	var payload Payload
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid import payload"})
	}
	payload.Screen.ID = 0 // Auto-increment
	payload.Screen.Title = payload.Screen.Title + " (Imported)"
	payload.Screen.Status = "ACTIVE"
	database.DB.Create(&payload.Screen)
	return c.Status(201).JSON(fiber.Map{
		"status": "success",
		"screen": payload.Screen,
	})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase C2: Screen Categories
// ──────────────────────────────────────────────────────────────────────────────

func GetScreenCategories(c *fiber.Ctx) error {
	var items []models.ScreenCategory
	query := database.DB.Order("name asc")
	if s := c.Query("status", ""); s != "" {
		query = query.Where("status = ?", s)
	}
	query.Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetScreenCategory(c *fiber.Ctx) error {
	var item models.ScreenCategory
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateScreenCategory(c *fiber.Ctx) error {
	var item models.ScreenCategory
	c.BodyParser(&item)
	if item.Name == "" {
		return c.Status(422).JSON(fiber.Map{"error": "name is required"})
	}
	if item.Status == "" { item.Status = "ACTIVE" }
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateScreenCategory(c *fiber.Ctx) error {
	var item models.ScreenCategory
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteScreenCategory(c *fiber.Ctx) error {
	database.DB.Delete(&models.ScreenCategory{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase D1: Scripts
// ──────────────────────────────────────────────────────────────────────────────

func GetScripts(c *fiber.Ctx) error {
	var items []models.Script
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	var total int64
	query := database.DB.Model(&models.Script{})
	if s := c.Query("type", ""); s != "" { query = query.Where("type = ?", s) }
	if s := c.Query("status", ""); s != "" { query = query.Where("status = ?", s) }
	if s := c.Query("script_category_id", ""); s != "" {
		query = query.Where("script_category_id = ?", s)
	}
	if s := c.Query("search", ""); s != "" {
		f := "%" + s + "%"
		query = query.Where("title LIKE ? OR description LIKE ?", f, f)
	}
	query.Count(&total)
	query.Preload("Category").Preload("RunAsUser").Preload("ScriptExecutor").
		Order("created_at desc").Offset((page-1)*perPage).Limit(perPage).Find(&items)
	return c.JSON(fiber.Map{"data": items, "meta": paginationMeta(page, perPage, total)})
}

func GetScript(c *fiber.Ctx) error {
	var item models.Script
	if err := database.DB.Preload("Category").Preload("RunAsUser").Preload("ScriptExecutor").
		First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateScript(c *fiber.Ctx) error {
	var item models.Script
	c.BodyParser(&item)
	if item.Title == "" {
		return c.Status(422).JSON(fiber.Map{"error": "title is required"})
	}
	if item.Status == "" { item.Status = "ACTIVE" }
	if item.Language == "" { item.Language = "php" }
	if item.Timeout <= 0 { item.Timeout = 60 }
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateScript(c *fiber.Ctx) error {
	var item models.Script
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	database.DB.First(&item, c.Params("id"))
	return c.JSON(item)
}

func DeleteScript(c *fiber.Ctx) error {
	database.DB.Delete(&models.Script{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

func UpdateScriptDraft(c *fiber.Ctx) error {
	var item models.Script
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&item).Updates(updates)
	return c.JSON(fiber.Map{"status": "success", "message": "Draft saved"})
}

func CloseScript(c *fiber.Ctx) error {
	var item models.Script
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "Script closed"})
}

func DuplicateScript(c *fiber.Ctx) error {
	var original models.Script
	if err := database.DB.First(&original, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}

	type Input struct {
		Title string `json:"title"`
	}
	var input Input
	c.BodyParser(&input)
	title := input.Title
	if title == "" {
		title = "Copy of " + original.Title
	}

	dup := models.Script{
		Title:            title,
		Description:      original.Description,
		Language:         original.Language,
		Code:             original.Code,
		Timeout:          original.Timeout,
		RetryAttempts:    original.RetryAttempts,
		RetryWaitTime:    original.RetryWaitTime,
		RunAsUserID:      original.RunAsUserID,
		ScriptExecutorID: original.ScriptExecutorID,
		Status:           "ACTIVE",
		CategoryID:       original.CategoryID,
	}
	database.DB.Create(&dup)
	return c.Status(201).JSON(dup)
}

func PreviewScript(c *fiber.Ctx) error {
	// A placeholder for script execution
	return c.JSON(fiber.Map{
		"status": "success",
		"output": "Preview executed successfully (Mock)",
	})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase D2: Script Categories
// ──────────────────────────────────────────────────────────────────────────────

func GetScriptCategories(c *fiber.Ctx) error {
	var items []models.ScriptCategory
	query := database.DB.Order("name asc")
	if s := c.Query("status", ""); s != "" {
		query = query.Where("status = ?", s)
	}
	query.Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetScriptCategory(c *fiber.Ctx) error {
	var item models.ScriptCategory
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateScriptCategory(c *fiber.Ctx) error {
	var item models.ScriptCategory
	c.BodyParser(&item)
	if item.Name == "" {
		return c.Status(422).JSON(fiber.Map{"error": "name is required"})
	}
	if item.Status == "" { item.Status = "ACTIVE" }
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateScriptCategory(c *fiber.Ctx) error {
	var item models.ScriptCategory
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteScriptCategory(c *fiber.Ctx) error {
	database.DB.Delete(&models.ScriptCategory{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase D3: Script Executors
// ──────────────────────────────────────────────────────────────────────────────

func GetScriptExecutors(c *fiber.Ctx) error {
	var items []models.ScriptExecutor
	database.DB.Order("title asc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetScriptExecutorLanguages(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"data": []map[string]string{
			{"text": "PHP Executor", "value": "php", "initDockerFile": "FROM php:8.2"},
			{"text": "JavaScript Executor", "value": "javascript", "initDockerFile": "FROM node:18"},
			{"text": "Python Executor", "value": "python", "initDockerFile": "FROM python:3.10"},
		},
	})
}

func UpdateScriptExecutor(c *fiber.Ctx) error {
	var item models.ScriptExecutor
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	delete(updates, "id")
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase E3: Comments
// ──────────────────────────────────────────────────────────────────────────────

func GetComments(c *fiber.Ctx) error {
	var items []models.Comment
	query := database.DB.Preload("User").Order("created_at desc")
	if cID := c.Query("commentable_id", ""); cID != "" {
		query = query.Where("commentable_id = ?", cID)
	}
	if cType := c.Query("commentable_type", ""); cType != "" {
		query = query.Where("commentable_type = ?", cType)
	}
	query.Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetComment(c *fiber.Ctx) error {
	var item models.Comment
	if err := database.DB.Preload("User").First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateComment(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	var item models.Comment
	c.BodyParser(&item)
	item.UserID = user.ID
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateComment(c *fiber.Ctx) error {
	var item models.Comment
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteComment(c *fiber.Ctx) error {
	database.DB.Delete(&models.Comment{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase F1: Notifications
// ──────────────────────────────────────────────────────────────────────────────

func GetNotifications(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }

	var items []models.Notification
	var total int64

	query := database.DB.Model(&models.Notification{}).
		Where("notifiable_id = ? AND notifiable_type = ?", user.ID, "ProcessMaker\\Models\\User")
	query.Count(&total)
	query.Order("created_at desc").Offset((page-1)*perPage).Limit(perPage).Find(&items)

	return c.JSON(fiber.Map{"data": items, "meta": paginationMeta(page, perPage, total)})
}

func GetNotification(c *fiber.Ctx) error {
	var item models.Notification
	if err := database.DB.First(&item, "id = ?", c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateNotification(c *fiber.Ctx) error {
	var item models.Notification
	if err := c.BodyParser(&item); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid format"})
	}
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateNotification(c *fiber.Ctx) error {
	var item models.Notification
	if err := database.DB.First(&item, "id = ?", c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteNotification(c *fiber.Ctx) error {
	database.DB.Delete(&models.Notification{}, "id = ?", c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

func MarkNotificationRead(c *fiber.Ctx) error {
	id := c.Params("id")
	database.DB.Model(&models.Notification{}).Where("id = ?", id).Update("read_at", database.DB.NowFunc())
	return c.JSON(fiber.Map{"status": "success"})
}

func MarkNotificationsReadViaBody(c *fiber.Ctx) error {
	var body struct {
		Notifications []string `json:"notifications"`
	}
	c.BodyParser(&body)
	if len(body.Notifications) > 0 {
		database.DB.Model(&models.Notification{}).Where("id IN ?", body.Notifications).Update("read_at", database.DB.NowFunc())
	}
	return c.JSON(fiber.Map{"status": "success"})
}

func MarkNotificationsUnreadViaBody(c *fiber.Ctx) error {
	var body struct {
		Notifications []string `json:"notifications"`
	}
	c.BodyParser(&body)
	if len(body.Notifications) > 0 {
		database.DB.Model(&models.Notification{}).Where("id IN ?", body.Notifications).Update("read_at", nil)
	}
	return c.JSON(fiber.Map{"status": "success"})
}

func ReadAllNotifications(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	database.DB.Model(&models.Notification{}).
		Where("notifiable_id = ? AND read_at IS NULL", user.ID).
		Update("read_at", database.DB.NowFunc())
	return c.JSON(fiber.Map{"status": "success"})
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase G: Settings & Environment Variables
// ──────────────────────────────────────────────────────────────────────────────

func GetSettings(c *fiber.Ctx) error {
	var items []models.Setting
	database.DB.Order("`group` asc, `key` asc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetSetting(c *fiber.Ctx) error {
	var item models.Setting
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func UpdateSetting(c *fiber.Ctx) error {
	var item models.Setting
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func CreateSetting(c *fiber.Ctx) error {
	var item models.Setting
	if err := c.BodyParser(&item); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid format"})
	}
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func DeleteSetting(c *fiber.Ctx) error {
	database.DB.Delete(&models.Setting{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}

func GetSettingGroups(c *fiber.Ctx) error {
	// Query unique groups from settings table
	var groups []string
	database.DB.Model(&models.Setting{}).Distinct("`group`").Where("`group` IS NOT NULL AND `group` != ''").Pluck("group", &groups)
	return c.JSON(fiber.Map{"data": groups})
}

func GetSettingMenuGroups(c *fiber.Ctx) error {
	// A placeholder for specific menu groups setting format
	return c.JSON(fiber.Map{"data": []string{"System", "Appearance", "Email", "Advanced"}})
}

func GetSettingsGroupButtons(c *fiber.Ctx) error {
	// Returns buttons configuration for a setting group
	return c.JSON(fiber.Map{"data": []string{}})
}

func ImportSettings(c *fiber.Ctx) error {
	var payload []models.Setting
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid format"})
	}
	
	// Update or create mock logic
	for _, setting := range payload {
		var existing models.Setting
		if err := database.DB.Where("`key` = ?", setting.Key).First(&existing).Error; err == nil {
			database.DB.Model(&existing).Updates(setting)
		} else {
			database.DB.Create(&setting)
		}
	}
	return c.JSON(fiber.Map{"status": "success", "message": "Settings imported"})
}

func UploadSettingsFile(c *fiber.Ctx) error {
	file, err := c.FormFile("file")
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "No file uploaded"})
	}
	return c.JSON(fiber.Map{"status": "success", "filename": file.Filename, "message": "File uploaded"})
}

func GetEnvVars(c *fiber.Ctx) error {
	var items []models.EnvironmentVariable
	database.DB.Order("name asc").Find(&items)
	return c.JSON(fiber.Map{"data": items})
}

func GetEnvVar(c *fiber.Ctx) error {
	var item models.EnvironmentVariable
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	return c.JSON(item)
}

func CreateEnvVar(c *fiber.Ctx) error {
	var item models.EnvironmentVariable
	c.BodyParser(&item)
	database.DB.Create(&item)
	return c.Status(201).JSON(item)
}

func UpdateEnvVar(c *fiber.Ctx) error {
	var item models.EnvironmentVariable
	if err := database.DB.First(&item, c.Params("id")).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Not found"})
	}
	var updates map[string]interface{}
	c.BodyParser(&updates)
	database.DB.Model(&item).Updates(updates)
	return c.JSON(item)
}

func DeleteEnvVar(c *fiber.Ctx) error {
	database.DB.Delete(&models.EnvironmentVariable{}, c.Params("id"))
	return c.JSON(fiber.Map{"status": "success"})
}
