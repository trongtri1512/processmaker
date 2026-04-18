package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
	"golang.org/x/crypto/bcrypt"
)

// GetUsers handles GET /users
func GetUsers(c *fiber.Ctx) error {
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
		s := "%" + search + "%"
		query = query.Where("username LIKE ? OR firstname LIKE ? OR lastname LIKE ? OR email LIKE ?", s, s, s, s)
	}

	query.Count(&total)
	if err := query.Order("created_at desc").Offset(offset).Limit(perPage).Find(&users).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch users"})
	}

	return c.JSON(fiber.Map{
		"data": users,
		"meta": paginationMeta(page, perPage, total),
	})
}

// GetUser handles GET /users/:id
func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	if err := database.DB.Where("id = ?", id).First(&user).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}
	return c.JSON(user)
}

// CreateUser handles POST /users
func CreateUser(c *fiber.Ctx) error {
	type CreateUserInput struct {
		Username        string `json:"username"`
		Email           string `json:"email"`
		Password        string `json:"password"`
		Firstname       string `json:"firstname"`
		Lastname        string `json:"lastname"`
		Status          string `json:"status"`
		Title           string `json:"title"`
		Phone           string `json:"phone"`
		Cell            string `json:"cell"`
		Fax             string `json:"fax"`
		Address         string `json:"address"`
		City            string `json:"city"`
		State           string `json:"state"`
		Postal          string `json:"postal"`
		Country         string `json:"country"`
		Timezone        string `json:"timezone"`
		Language        string `json:"language"`
		IsAdministrator bool   `json:"is_administrator"`
	}

	var input CreateUserInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if input.Username == "" || input.Email == "" || input.Password == "" {
		return c.Status(422).JSON(fiber.Map{"error": "username, email, and password are required"})
	}

	// Check unique
	var count int64
	database.DB.Model(&models.User{}).Where("username = ? OR email = ?", input.Username, input.Email).Count(&count)
	if count > 0 {
		return c.Status(422).JSON(fiber.Map{"error": "Username or email already exists"})
	}

	// Hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
	}

	status := input.Status
	if status == "" {
		status = "ACTIVE"
	}
	tz := input.Timezone
	if tz == "" {
		tz = "UTC"
	}
	lang := input.Language
	if lang == "" {
		lang = "en"
	}

	user := models.User{
		Username:        input.Username,
		Email:           input.Email,
		Password:        string(hash),
		Firstname:       input.Firstname,
		Lastname:        input.Lastname,
		Status:          status,
		Title:           input.Title,
		Phone:           input.Phone,
		Cell:            input.Cell,
		Fax:             input.Fax,
		Address:         input.Address,
		City:            input.City,
		State:           input.State,
		Postal:          input.Postal,
		Country:         input.Country,
		Timezone:        tz,
		Language:        lang,
		IsAdministrator: input.IsAdministrator,
	}

	if err := database.DB.Create(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create user"})
	}

	return c.Status(201).JSON(user)
}

// UpdateUser handles PUT /users/:id
func UpdateUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	if err := database.DB.Where("id = ?", id).First(&user).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}

	var updates map[string]interface{}
	if err := c.BodyParser(&updates); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Don't allow password update via this endpoint
	delete(updates, "password")
	delete(updates, "id")

	if err := database.DB.Model(&user).Updates(updates).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update user"})
	}

	// Reload
	database.DB.First(&user, id)
	return c.JSON(user)
}

// DeleteUser handles DELETE /users/:id
func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	if err := database.DB.Where("id = ?", id).First(&user).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}

	database.DB.Delete(&user)
	return c.JSON(fiber.Map{"status": "success", "message": "User deleted"})
}

// ChangePassword handles PUT /users/:id/password
func ChangePassword(c *fiber.Ctx) error {
	id := c.Params("id")
	authUser := c.Locals("user").(models.User)

	// Only admin or the user themselves can change password
	idNum, _ := strconv.Atoi(id)
	if !authUser.IsAdministrator && authUser.ID != uint(idNum) {
		return c.Status(403).JSON(fiber.Map{"error": "Not authorized"})
	}

	type PasswordInput struct {
		Password             string `json:"password"`
		PasswordConfirmation string `json:"password_confirmation"`
	}

	var input PasswordInput
	if err := c.BodyParser(&input); err != nil || input.Password == "" {
		return c.Status(400).JSON(fiber.Map{"error": "password is required"})
	}
	if input.Password != input.PasswordConfirmation {
		return c.Status(422).JSON(fiber.Map{"error": "Passwords do not match"})
	}

	hash, _ := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	database.DB.Model(&models.User{}).Where("id = ?", id).Update("password", string(hash))

	return c.JSON(fiber.Map{"status": "success", "message": "Password updated"})
}

// Helper
func paginationMeta(page, perPage int, total int64) fiber.Map {
	return fiber.Map{
		"current_page": page,
		"per_page":     perPage,
		"total":        total,
		"last_page":    (total + int64(perPage) - 1) / int64(perPage),
	}
}
