package models

import (
	"time"

	"gorm.io/gorm"
)

type Process struct {
	ID                string         `gorm:"primaryKey;column:id;type:char(36)" json:"id"`
	ProcessCategoryID string         `gorm:"column:process_category_id;type:char(36)" json:"process_category_id"`
	UserID            string         `gorm:"column:user_id;type:char(36)" json:"user_id"`
	Name              string         `gorm:"column:name;size:255" json:"name"`
	Description       string         `gorm:"column:description;type:text" json:"description"`
	Status            string         `gorm:"column:status;size:50;default:'ACTIVE'" json:"status"`
	Bpmn              string         `gorm:"column:bpmn;type:longtext" json:"bpmn"`
	BpmnDraft         string         `gorm:"column:bpmn_draft;type:longtext" json:"bpmn_draft,omitempty"`
	Properties        string         `gorm:"column:properties;type:text" json:"properties,omitempty"`
	StartEvents       string         `gorm:"column:start_events;type:text" json:"start_events,omitempty"`
	WarningRules      string         `gorm:"column:warning_rules;type:text" json:"warning_rules,omitempty"`

	CreatedAt time.Time      `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time      `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index;column:deleted_at" json:"-"`

	// Relations
	Category *ProcessCategory `gorm:"foreignKey:ProcessCategoryID" json:"category,omitempty"`
}

func (Process) TableName() string {
	return "processes"
}
