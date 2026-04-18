package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/controllers"
	"github.com/trongtri1512/processmaker-go/middleware"
)

func Setup(app *fiber.App) {
	api := app.Group("/api/1.0")

	api.Get("/ping", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "pong from Go API",
			"status":  "success",
		})
	})

	// Protected routes
	protected := api.Group("/", middleware.Protected())

	protected.Get("/me", func(c *fiber.Ctx) error {
		user := c.Locals("user")
		return c.JSON(fiber.Map{
			"status": "success",
			"user":   user,
		})
	})

	// Phase 2: Read-Heavy APIs
	protected.Get("/tasks", controllers.GetTasks)
	protected.Get("/requests", controllers.GetRequests)
	
	// Phase 2: User APIs
	protected.Get("/users", controllers.GetUsers)
	protected.Get("/groups", controllers.GetGroups)

	// Phase 4: Engine APIs
	protected.Post("/processes/:id/events/:eventId", controllers.StartProcess)
}
