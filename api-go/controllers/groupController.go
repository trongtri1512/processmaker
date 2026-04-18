package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

// GetGroups handles GET /groups
func GetGroups(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	status := c.Query("status", "ACTIVE")
	search := c.Query("search", "")

	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }
	offset := (page - 1) * perPage

	var groups []models.Group
	var total int64

	query := database.DB.Model(&models.Group{}).Where("status = ?", status)
	if search != "" {
		query = query.Where("name LIKE ?", "%"+search+"%")
	}

	query.Count(&total)
	if err := query.Order("created_at desc").Offset(offset).Limit(perPage).Find(&groups).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch groups"})
	}

	return c.JSON(fiber.Map{
		"data": groups,
		"meta": paginationMeta(page, perPage, total),
	})
}

// GetGroup handles GET /groups/:id
func GetGroup(c *fiber.Ctx) error {
	id := c.Params("id")
	var group models.Group
	if err := database.DB.Where("id = ?", id).First(&group).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Group not found"})
	}
	return c.JSON(group)
}

// CreateGroup handles POST /groups
func CreateGroup(c *fiber.Ctx) error {
	type Input struct {
		Name        string `json:"name"`
		Description string `json:"description"`
		Status      string `json:"status"`
		ManagerID   *uint  `json:"manager_id"`
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

	group := models.Group{
		Name:        input.Name,
		Description: input.Description,
		Status:      status,
		ManagerID:   input.ManagerID,
	}

	if err := database.DB.Create(&group).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create group"})
	}

	return c.Status(201).JSON(group)
}

// UpdateGroup handles PUT /groups/:id
func UpdateGroup(c *fiber.Ctx) error {
	id := c.Params("id")
	var group models.Group
	if err := database.DB.Where("id = ?", id).First(&group).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Group not found"})
	}

	var updates map[string]interface{}
	if err := c.BodyParser(&updates); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
	delete(updates, "id")

	database.DB.Model(&group).Updates(updates)
	database.DB.First(&group, id)
	return c.JSON(group)
}

// DeleteGroup handles DELETE /groups/:id
func DeleteGroup(c *fiber.Ctx) error {
	id := c.Params("id")
	var group models.Group
	if err := database.DB.Where("id = ?", id).First(&group).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Group not found"})
	}
	database.DB.Delete(&group)
	return c.JSON(fiber.Map{"status": "success", "message": "Group deleted"})
}

// GetGroupUsers handles GET /groups/:id/users
func GetGroupUsers(c *fiber.Ctx) error {
	groupID := c.Params("id")

	var members []models.GroupMember
	database.DB.Where("group_id = ? AND member_type = ?", groupID, "ProcessMaker\\Models\\User").Find(&members)

	var userIDs []uint
	for _, m := range members {
		userIDs = append(userIDs, m.MemberID)
	}

	if len(userIDs) == 0 {
		return c.JSON(fiber.Map{"data": []interface{}{}})
	}

	var users []models.User
	database.DB.Where("id IN ?", userIDs).Find(&users)

	return c.JSON(fiber.Map{"data": users})
}

// ──────────────────────────────────────────────────────────────────────────────
// Group Members
// ──────────────────────────────────────────────────────────────────────────────

// GetGroupMembers handles GET /group_members
func GetGroupMembers(c *fiber.Ctx) error {
	groupID := c.Query("group_id", "")

	var members []models.GroupMember
	query := database.DB.Model(&models.GroupMember{})
	if groupID != "" {
		query = query.Where("group_id = ?", groupID)
	}

	if err := query.Preload("Group").Find(&members).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch group members"})
	}
	return c.JSON(fiber.Map{"data": members})
}

// GetGroupMember handles GET /group_members/:id
func GetGroupMember(c *fiber.Ctx) error {
	id := c.Params("id")
	var member models.GroupMember
	if err := database.DB.Preload("Group").Where("id = ?", id).First(&member).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Group member not found"})
	}
	return c.JSON(member)
}

// AddGroupMember handles POST /group_members
func AddGroupMember(c *fiber.Ctx) error {
	type Input struct {
		GroupID    uint   `json:"group_id"`
		MemberID  uint   `json:"member_id"`
		MemberType string `json:"member_type"`
	}

	var input Input
	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if input.MemberType == "" {
		input.MemberType = "ProcessMaker\\Models\\User"
	}

	member := models.GroupMember{
		GroupID:    input.GroupID,
		MemberID:  input.MemberID,
		MemberType: input.MemberType,
	}

	if err := database.DB.Create(&member).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to add group member"})
	}
	return c.Status(201).JSON(member)
}

// RemoveGroupMember handles DELETE /group_members/:id
func RemoveGroupMember(c *fiber.Ctx) error {
	id := c.Params("id")
	result := database.DB.Delete(&models.GroupMember{}, id)
	if result.RowsAffected == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Group member not found"})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "Member removed"})
}

// GetGroupSubGroups handles GET /groups/:id/groups
// Returns sub-groups that are members of this group.
func GetGroupSubGroups(c *fiber.Ctx) error {
	groupID := c.Params("id")

	var members []models.GroupMember
	database.DB.Where("group_id = ? AND member_type = ?", groupID, "ProcessMaker\\Models\\Group").Find(&members)

	var groupIDs []uint
	for _, m := range members {
		groupIDs = append(groupIDs, m.MemberID)
	}

	if len(groupIDs) == 0 {
		return c.JSON(fiber.Map{"data": []interface{}{}})
	}

	var groups []models.Group
	database.DB.Where("id IN ?", groupIDs).Find(&groups)
	return c.JSON(fiber.Map{"data": groups})
}

// GroupsAvailable handles GET /group_members_available
// Returns all ACTIVE groups NOT already assigned to the given member.
func GroupsAvailable(c *fiber.Ctx) error {
	memberID := c.Query("member_id", "")
	memberType := c.Query("member_type", "")
	groupID := c.Query("group_id", "")
	filter := c.Query("filter", "")

	// Get already-assigned group IDs
	var assignedIDs []uint
	if groupID != "" {
		// Groups that are sub-members of this group
		var members []models.GroupMember
		database.DB.Where("group_id = ? AND member_type = ?", groupID, "ProcessMaker\\Models\\Group").Find(&members)
		for _, m := range members {
			assignedIDs = append(assignedIDs, m.MemberID)
		}
		gid, _ := strconv.Atoi(groupID)
		assignedIDs = append(assignedIDs, uint(gid)) // Exclude self
	} else if memberID != "" && memberType != "" {
		var members []models.GroupMember
		database.DB.Where("member_id = ? AND member_type = ?", memberID, memberType).Find(&members)
		for _, m := range members {
			assignedIDs = append(assignedIDs, m.GroupID)
		}
	}

	query := database.DB.Model(&models.Group{}).Where("status = ?", "ACTIVE")
	if len(assignedIDs) > 0 {
		query = query.Where("id NOT IN ?", assignedIDs)
	}
	if filter != "" {
		query = query.Where("name LIKE ?", "%"+filter+"%")
	}

	var groups []models.Group
	query.Order("name asc").Find(&groups)
	return c.JSON(fiber.Map{"data": groups})
}

// UsersAvailable handles GET /user_members_available
// Returns all active users NOT already a member of the given group.
func UsersAvailable(c *fiber.Ctx) error {
	groupID := c.Query("group_id", "")
	filter := c.Query("filter", "")

	var assignedIDs []uint
	if groupID != "" {
		var members []models.GroupMember
		database.DB.Where("group_id = ? AND member_type = ?", groupID, "ProcessMaker\\Models\\User").Find(&members)
		for _, m := range members {
			assignedIDs = append(assignedIDs, m.MemberID)
		}
	}

	query := database.DB.Model(&models.User{}).Where("status != ?", "INACTIVE")
	if len(assignedIDs) > 0 {
		query = query.Where("id NOT IN ?", assignedIDs)
	}
	if filter != "" {
		f := "%" + filter + "%"
		query = query.Where("firstname LIKE ? OR lastname LIKE ? OR username LIKE ?", f, f, f)
	}

	page, _ := strconv.Atoi(c.Query("page", "1"))
	perPage, _ := strconv.Atoi(c.Query("per_page", "10"))
	if page <= 0 { page = 1 }
	if perPage <= 0 { perPage = 10 }

	var total int64
	var users []models.User
	query.Count(&total)
	query.Order("firstname asc").Offset((page-1)*perPage).Limit(perPage).Find(&users)

	return c.JSON(fiber.Map{
		"data": users,
		"meta": paginationMeta(page, perPage, total),
	})
}

// ──────────────────────────────────────────────────────────────────────────────
// Permissions
// ──────────────────────────────────────────────────────────────────────────────

// GetPermissions handles GET /permissions
func GetPermissions(c *fiber.Ctx) error {
	var perms []models.Permission
	database.DB.Order("`group` asc, name asc").Find(&perms)
	return c.JSON(fiber.Map{"data": perms})
}

// UpdatePermissions handles PUT /permissions
// Syncs permission_names for a user or group via the `assignables` pivot table.
func UpdatePermissions(c *fiber.Ctx) error {
	type Input struct {
		UserID          *uint    `json:"user_id"`
		GroupID         *uint    `json:"group_id"`
		IsAdministrator *bool    `json:"is_administrator"`
		PermissionNames []string `json:"permission_names"`
	}

	var input Input
	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	authUser := c.Locals("user").(models.User)

	if input.UserID != nil {
		// Update user permissions
		var user models.User
		if err := database.DB.First(&user, *input.UserID).Error; err != nil {
			return c.Status(404).JSON(fiber.Map{"error": "User not found"})
		}

		// Handle is_administrator flag
		if input.IsAdministrator != nil {
			if !authUser.IsAdministrator {
				return c.Status(403).JSON(fiber.Map{"error": "Only admins can modify admin privileges"})
			}
			database.DB.Model(&user).Update("is_administrator", *input.IsAdministrator)
		}

		// Sync permissions via assignables pivot table
		syncPermissions(*input.UserID, "ProcessMaker\\Models\\User", input.PermissionNames)

	} else if input.GroupID != nil {
		// Update group permissions
		var group models.Group
		if err := database.DB.First(&group, *input.GroupID).Error; err != nil {
			return c.Status(404).JSON(fiber.Map{"error": "Group not found"})
		}

		syncPermissions(*input.GroupID, "ProcessMaker\\Models\\Group", input.PermissionNames)
	} else {
		return c.Status(422).JSON(fiber.Map{"error": "user_id or group_id is required"})
	}

	return c.SendStatus(204)
}

// syncPermissions replaces all permission assignments for a given entity in the
// `assignables` polymorphic pivot table.
func syncPermissions(entityID uint, entityType string, permissionNames []string) {
	// Delete existing
	database.DB.Exec(
		"DELETE FROM assignables WHERE assignable_id = ? AND assignable_type = ?",
		entityID, entityType,
	)

	if len(permissionNames) == 0 {
		return
	}

	// Find permission IDs
	var perms []models.Permission
	database.DB.Where("name IN ?", permissionNames).Find(&perms)

	// Insert new assignments
	for _, p := range perms {
		database.DB.Exec(
			"INSERT INTO assignables (permission_id, assignable_id, assignable_type) VALUES (?, ?, ?)",
			p.ID, entityID, entityType,
		)
	}
}

