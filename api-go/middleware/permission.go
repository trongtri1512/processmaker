package middleware

import (
	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// Can returns a middleware that checks if the user has a specific permission.
// Administrators bypass all permission checks.
// Usage: middleware.Can("edit-users")
func Can(permissionName string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		user, ok := c.Locals("user").(models.User)
		if !ok {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Not authenticated",
			})
		}

		// Admins bypass all permission checks
		if user.IsAdministrator {
			return c.Next()
		}

		// Check if user has the permission directly via `assignables` table
		var count int64
		database.DB.Raw(`
			SELECT COUNT(*) FROM assignables a
			JOIN permissions p ON p.id = a.permission_id
			WHERE a.assignable_id = ? AND a.assignable_type = ? AND p.name = ?
		`, user.ID, "ProcessMaker\\Models\\User", permissionName).Scan(&count)

		if count > 0 {
			return c.Next()
		}

		// Check if user has the permission via group membership
		database.DB.Raw(`
			SELECT COUNT(*) FROM assignables a
			JOIN permissions p ON p.id = a.permission_id
			JOIN group_members gm ON gm.group_id = a.assignable_id
			WHERE a.assignable_type = ? AND gm.member_id = ? AND gm.member_type = ? AND p.name = ?
		`, "ProcessMaker\\Models\\Group", user.ID, "ProcessMaker\\Models\\User", permissionName).Scan(&count)

		if count > 0 {
			return c.Next()
		}

		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": "You do not have permission: " + permissionName,
		})
	}
}
