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
		})
	})

	// ── Public Routes ────────────────────────────────────────────────────
	api.Post("/login", controllers.Login)

	// ── Protected Routes ─────────────────────────────────────────────────
	p := api.Group("/", middleware.Protected())

	p.Get("/me", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "success", "user": c.Locals("user")})
	})

	// ── Phase A: Users ───────────────────────────────────────────────────
	p.Get("/users", controllers.GetUsers)
	p.Get("/users/:id", controllers.GetUser)
	p.Post("/users", controllers.CreateUser)
	p.Put("/users/:id", controllers.UpdateUser)
	p.Delete("/users/:id", controllers.DeleteUser)
	p.Put("/users/:id/password", controllers.ChangePassword)

	// ── Phase A: Groups ──────────────────────────────────────────────────
	p.Get("/groups", controllers.GetGroups)
	p.Get("/groups/:id", controllers.GetGroup)
	p.Post("/groups", controllers.CreateGroup)
	p.Put("/groups/:id", controllers.UpdateGroup)
	p.Delete("/groups/:id", controllers.DeleteGroup)
	p.Get("/groups/:id/users", controllers.GetGroupUsers)
	p.Get("/groups/:id/groups", controllers.GetGroupSubGroups)

	// ── Phase A: Group Members ───────────────────────────────────────────
	p.Get("/group_members", controllers.GetGroupMembers)
	p.Get("/group_members/:id", controllers.GetGroupMember)
	p.Post("/group_members", controllers.AddGroupMember)
	p.Delete("/group_members/:id", controllers.RemoveGroupMember)
	p.Get("/group_members_available", controllers.GroupsAvailable)
	p.Get("/user_members_available", controllers.UsersAvailable)

	// ── Phase A: Permissions ─────────────────────────────────────────────
	p.Get("/permissions", controllers.GetPermissions)
	p.Put("/permissions", controllers.UpdatePermissions)

	// ── Phase B1: Processes ──────────────────────────────────────────────
	p.Get("/processes", controllers.GetProcesses)
	p.Get("/processes/:id", controllers.GetProcess)
	p.Post("/processes", controllers.CreateProcess)
	p.Put("/processes/:id", controllers.UpdateProcess)
	p.Delete("/processes/:id", controllers.DeleteProcess)
	p.Put("/processes/:id/draft", controllers.UpdateProcessDraft)
	p.Post("/processes/:id/close", controllers.CloseProcess)
	p.Put("/processes/:id/duplicate", controllers.DuplicateProcess)
	p.Get("/processes/:id/bpmn", controllers.DownloadBpmn)
	p.Post("/processes/:id/export", controllers.ExportProcess)
	p.Post("/processes/import", controllers.ImportProcess)
	p.Get("/processes/:id/start_events", controllers.GetStartEvents)
	p.Post("/processes/:id/events/:eventId", controllers.StartProcess)

	// ── Phase B2: Process Categories ─────────────────────────────────────
	p.Get("/process_categories", controllers.GetProcessCategories)
	p.Get("/process_categories/:id", controllers.GetProcessCategory)
	p.Post("/process_categories", controllers.CreateProcessCategory)
	p.Put("/process_categories/:id", controllers.UpdateProcessCategory)
	p.Delete("/process_categories/:id", controllers.DeleteProcessCategory)

	// ── Phase B3: Task Assignments ───────────────────────────────────────
	p.Get("/process_task_assignments", controllers.GetTaskAssignments)
	p.Post("/process_task_assignments", controllers.CreateTaskAssignment)
	p.Put("/process_task_assignments/:id", controllers.UpdateTaskAssignment)
	p.Delete("/process_task_assignments/:id", controllers.DeleteTaskAssignment)

	// ── Phase B4: Launchpad ──────────────────────────────────────────────
	p.Get("/process_launchpads", controllers.GetLaunchpads)
	p.Post("/process_launchpads", controllers.CreateLaunchpad)
	p.Put("/process_launchpads/:id", controllers.UpdateLaunchpad)
	p.Delete("/process_launchpads/:id", controllers.DeleteLaunchpad)


	// ── Phase C: Screens ─────────────────────────────────────────────────
	p.Get("/screens", controllers.GetScreens)
	p.Get("/screens/:id", controllers.GetScreen)
	p.Post("/screens", controllers.CreateScreen)
	p.Put("/screens/:id", controllers.UpdateScreen)
	p.Delete("/screens/:id", controllers.DeleteScreen)

	// ── Phase C: Screen Categories ───────────────────────────────────────
	p.Get("/screen_categories", controllers.GetScreenCategories)
	p.Post("/screen_categories", controllers.CreateScreenCategory)
	p.Put("/screen_categories/:id", controllers.UpdateScreenCategory)
	p.Delete("/screen_categories/:id", controllers.DeleteScreenCategory)

	// ── Phase D: Scripts ─────────────────────────────────────────────────
	p.Get("/scripts", controllers.GetScripts)
	p.Get("/scripts/:id", controllers.GetScript)
	p.Post("/scripts", controllers.CreateScript)
	p.Put("/scripts/:id", controllers.UpdateScript)
	p.Delete("/scripts/:id", controllers.DeleteScript)

	// ── Phase D: Script Categories ───────────────────────────────────────
	p.Get("/script_categories", controllers.GetScriptCategories)
	p.Post("/script_categories", controllers.CreateScriptCategory)
	p.Put("/script_categories/:id", controllers.UpdateScriptCategory)
	p.Delete("/script_categories/:id", controllers.DeleteScriptCategory)

	// ── Phase 2/E: Tasks ─────────────────────────────────────────────────
	p.Get("/tasks", controllers.GetTasks)
	p.Get("/tasks/:id", controllers.GetTask)
	p.Put("/tasks/:id", controllers.CompleteTask)

	// ── Phase 2/E: Requests ──────────────────────────────────────────────
	p.Get("/requests", controllers.GetRequests)
	p.Get("/requests/:id", controllers.GetRequest)

	// ── Phase E3: Comments ───────────────────────────────────────────────
	p.Get("/comments", controllers.GetComments)
	p.Get("/comments/:id", controllers.GetComment)
	p.Post("/comments", controllers.CreateComment)
	p.Put("/comments/:id", controllers.UpdateComment)
	p.Delete("/comments/:id", controllers.DeleteComment)

	// ── Phase F: Notifications ───────────────────────────────────────────
	p.Get("/notifications", controllers.GetNotifications)
	p.Put("/notifications/:id", controllers.MarkNotificationRead)
	p.Put("/read_all_notifications", controllers.ReadAllNotifications)

	// ── Phase G: Settings ────────────────────────────────────────────────
	p.Get("/settings", controllers.GetSettings)
	p.Get("/settings/:id", controllers.GetSetting)
	p.Put("/settings/:id", controllers.UpdateSetting)

	// ── Phase G: Environment Variables ───────────────────────────────────
	p.Get("/environment_variables", controllers.GetEnvVars)
	p.Get("/environment_variables/:id", controllers.GetEnvVar)
	p.Post("/environment_variables", controllers.CreateEnvVar)
	p.Put("/environment_variables/:id", controllers.UpdateEnvVar)
	p.Delete("/environment_variables/:id", controllers.DeleteEnvVar)
}
