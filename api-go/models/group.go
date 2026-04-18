package models

import (
	"time"

	"gorm.io/gorm"
)

// Group represents the `groups` table.
type Group struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Name        string         `gorm:"size:255;not null;unique" json:"name"`
	Description string         `gorm:"type:text" json:"description,omitempty"`
	ManagerID   *uint          `gorm:"column:manager_id" json:"manager_id,omitempty"`
	Status      string         `gorm:"size:50;default:'ACTIVE'" json:"status"`
	Enabled2FA  bool           `gorm:"column:enabled_2fa;default:false" json:"enabled_2fa"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

func (Group) TableName() string {
	return "groups"
}
