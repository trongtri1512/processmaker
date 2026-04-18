package models

import (
	"time"

	"gorm.io/gorm"
)

type ProcessRequest struct {
	ID                     string `gorm:"primaryKey;column:id;type:char(36)" json:"id"`
	ProcessID              string `gorm:"column:process_id;type:char(36)" json:"process_id"`
	UserID                 uint   `gorm:"column:user_id;type:bigint unsigned" json:"user_id"`
	ParentRequestID        string `gorm:"column:parent_request_id;type:char(36)" json:"parent_request_id,omitempty"`
	ParticipantID          string `gorm:"column:participant_id;type:char(36)" json:"participant_id,omitempty"`
	ProcessCollaborationID string `gorm:"column:process_collaboration_id;type:char(36)" json:"process_collaboration_id,omitempty"`
	CallableID             string `gorm:"column:callable_id;type:char(36)" json:"callable_id,omitempty"`
	Status                 string `gorm:"column:status;size:50" json:"status"`
	Name                   string `gorm:"column:name;size:255" json:"name"`
	Data                   string `gorm:"column:data;type:longtext" json:"data,omitempty"`
	CaseNumber             int    `gorm:"column:case_number" json:"case_number,omitempty"`

	InitiatedAt time.Time      `gorm:"column:initiated_at" json:"initiated_at"`
	CompletedAt *time.Time     `gorm:"column:completed_at" json:"completed_at,omitempty"`
	CreatedAt   time.Time      `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   time.Time      `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index;column:deleted_at" json:"-"`

	// Relations
	User    *User    `gorm:"foreignKey:UserID" json:"user,omitempty"`
	Process *Process `gorm:"foreignKey:ProcessID" json:"process,omitempty"`
}

func (ProcessRequest) TableName() string {
	return "process_requests"
}
