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


	// ── Phase C1: Screens ────────────────────────────────────────────────
	p.Get("/screens", controllers.GetScreens)
	p.Get("/screens/:id", controllers.GetScreen)
	p.Post("/screens", controllers.CreateScreen)
	p.Put("/screens/:id", controllers.UpdateScreen)
	p.Delete("/screens/:id", controllers.DeleteScreen)
	p.Put("/screens/:id/draft", controllers.UpdateScreenDraft)
	p.Post("/screens/:id/close", controllers.CloseScreen)
	p.Put("/screens/:id/duplicate", controllers.DuplicateScreen)
	p.Post("/screens/:id/export", controllers.ExportScreen)
	p.Post("/screens/import", controllers.ImportScreen)

	// ── Phase C2: Screen Categories ──────────────────────────────────────
	p.Get("/screen_categories", controllers.GetScreenCategories)
	p.Get("/screen_categories/:id", controllers.GetScreenCategory)
	p.Post("/screen_categories", controllers.CreateScreenCategory)
	p.Put("/screen_categories/:id", controllers.UpdateScreenCategory)
	p.Delete("/screen_categories/:id", controllers.DeleteScreenCategory)

	// ── Phase D1: Scripts ────────────────────────────────────────────────
	p.Get("/scripts", controllers.GetScripts)
	p.Get("/scripts/:id", controllers.GetScript)
	p.Post("/scripts", controllers.CreateScript)
	p.Put("/scripts/:id", controllers.UpdateScript)
	p.Delete("/scripts/:id", controllers.DeleteScript)
	p.Put("/scripts/:id/draft", controllers.UpdateScriptDraft)
	p.Post("/scripts/:id/close", controllers.CloseScript)
	p.Put("/scripts/:id/duplicate", controllers.DuplicateScript)
	p.Post("/scripts/:id/preview", controllers.PreviewScript)

	// ── Phase D2: Script Categories ──────────────────────────────────────
	p.Get("/script_categories", controllers.GetScriptCategories)
	p.Get("/script_categories/:id", controllers.GetScriptCategory)
	p.Post("/script_categories", controllers.CreateScriptCategory)
	p.Put("/script_categories/:id", controllers.UpdateScriptCategory)
	p.Delete("/script_categories/:id", controllers.DeleteScriptCategory)

	// ── Phase D3: Script Executors ───────────────────────────────────────
	p.Get("/script_executors", controllers.GetScriptExecutors)
	p.Get("/script_executors/available-languages", controllers.GetScriptExecutorLanguages)
	p.Put("/script_executors/:id", controllers.UpdateScriptExecutor)

	// ── Phase E1: Tasks ──────────────────────────────────────────────────
	p.Get("/tasks", controllers.GetTasks)
	p.Get("/tasks/:id", controllers.GetTask)
	p.Put("/tasks/:id", controllers.CompleteTask) // Note: original is PUT
	p.Post("/tasks/:id/setViewed", controllers.SetTaskViewed)
	p.Put("/tasks/:id/setPriority", controllers.SetTaskPriority)
	p.Post("/tasks/:id/rollback", controllers.RollbackTask)
	p.Get("/tasks/:id/eligibleRollbackTask", controllers.EligibleRollbackTask)
	p.Get("/tasks/:id/screens/:screen", controllers.GetTaskScreen)
	p.Put("/tasks/updateReassign", controllers.UpdateReassign)

	// ── Phase E2: Requests ───────────────────────────────────────────────
	p.Get("/requests", controllers.GetRequests)
	p.Get("/requests/:id", controllers.GetRequest)
	p.Put("/requests/:id", controllers.UpdateRequest)
	p.Delete("/requests/:id", controllers.DeleteRequest)
	p.Put("/requests/:id/retry", controllers.RetryRequest)
	p.Get("/requests/:id/tokens", controllers.GetRequestTokens)
	p.Get("/requests/:id/details-screen-request", controllers.GetRequestDetailsScreen)
	p.Get("/requests/:id/end-event-destination", controllers.GetRequestEndEventDestination)
	
	// ── Phase E2.1: Request Files ────────────────────────────────────────
	p.Get("/requests/:id/files", controllers.GetRequestFiles)
	p.Post("/requests/:id/files", controllers.UploadRequestFile)
	p.Get("/requests/:id/files/:file", controllers.GetRequestFile)
	p.Delete("/requests/:id/files/:file", controllers.DeleteRequestFile)

	// ── Phase E3: Comments ───────────────────────────────────────────────
	p.Get("/comments", controllers.GetComments)
	p.Get("/comments/:id", controllers.GetComment)
	p.Post("/comments", controllers.CreateComment)
	p.Put("/comments/:id", controllers.UpdateComment)
	p.Delete("/comments/:id", controllers.DeleteComment)

	// ── Phase F1: Notifications ──────────────────────────────────────────
	p.Get("/notifications", controllers.GetNotifications)
	p.Get("/notifications/:id", controllers.GetNotification)
	p.Post("/notifications", controllers.CreateNotification)
	p.Put("/notifications/:id", controllers.UpdateNotification)
	p.Delete("/notifications/:id", controllers.DeleteNotification)
	p.Put("/read_notifications", controllers.MarkNotificationsReadViaBody)
	p.Put("/unread_notifications", controllers.MarkNotificationsUnreadViaBody)
	p.Put("/read_all_notifications", controllers.ReadAllNotifications)

	// ── Phase F2: Settings ───────────────────────────────────────────────
	p.Get("/settings", controllers.GetSettings)
	p.Get("/settings/groups", controllers.GetSettingGroups)
	p.Get("/settings/menu-groups", controllers.GetSettingMenuGroups)
	p.Post("/settings/import", controllers.ImportSettings)
	p.Post("/settings/upload-file", controllers.UploadSettingsFile)
	p.Get("/settings/group/:group/buttons", controllers.GetSettingsGroupButtons)
	p.Post("/settings", controllers.CreateSetting)
	p.Get("/settings/:id", controllers.GetSetting)
	p.Put("/settings/:id", controllers.UpdateSetting)
	p.Delete("/settings/:id", controllers.DeleteSetting)

	// ── Phase F3: Environment Variables ──────────────────────────────────
	p.Get("/environment_variables", controllers.GetEnvVars)
	p.Get("/environment_variables/:id", controllers.GetEnvVar)
	p.Post("/environment_variables", controllers.CreateEnvVar)
	p.Put("/environment_variables/:id", controllers.UpdateEnvVar)
	p.Delete("/environment_variables/:id", controllers.DeleteEnvVar)
}
