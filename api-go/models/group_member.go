package models

import "time"

// GroupMember represents the `group_members` table (no soft deletes).
type GroupMember struct {
	ID         uint   `gorm:"primaryKey" json:"id"`
	GroupID    uint   `gorm:"column:group_id;not null" json:"group_id"`
	MemberID   uint   `gorm:"column:member_id;not null" json:"member_id"`
	MemberType string `gorm:"column:member_type;size:255;not null" json:"member_type"` // "ProcessMaker\\Models\\User" or "ProcessMaker\\Models\\Group"

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`

	// Relations
	Group *Group `gorm:"foreignKey:GroupID" json:"group,omitempty"`
}

func (GroupMember) TableName() string {
	return "group_members"
}
