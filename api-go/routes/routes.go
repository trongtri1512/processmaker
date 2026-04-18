package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/controllers"
	"github.com/trongtri1512/processmaker-go/middleware"
)

func Setup(app *fiber.App) {
	api := app.Group("/api/1.0")

	// ── Health Check ─────────────────────────────────────────────────────
	api.Get("/ping", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "pong from Go BPMN Engine",
			"engine":  "ProcessMaker Go v1.0",
			"status":  "success",
		})
	})

	// ── Public Routes (No Auth) ──────────────────────────────────────────
	api.Post("/login", controllers.Login)

	// ── Protected Routes ─────────────────────────────────────────────────
	protected := api.Group("/", middleware.Protected())

	// Auth
	protected.Get("/me", func(c *fiber.Ctx) error {
		user := c.Locals("user")
		return c.JSON(fiber.Map{"status": "success", "user": user})
	})

	// Tasks
	protected.Get("/tasks", controllers.GetTasks)
	protected.Get("/tasks/:id", controllers.GetTask)
	protected.Put("/tasks/:id", controllers.CompleteTask)

	// Requests
	protected.Get("/requests", controllers.GetRequests)
	protected.Get("/requests/:id", controllers.GetRequest)

	// Processes
	protected.Get("/processes", controllers.GetProcesses)
	protected.Get("/processes/:id", controllers.GetProcess)
	protected.Post("/processes/:id/events/:eventId", controllers.StartProcess)

	// Users
	protected.Get("/users", controllers.GetUsers)
	protected.Get("/users/:id", controllers.GetUser)

	// Groups
	protected.Get("/groups", controllers.GetGroups)
}
