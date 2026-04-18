package models

import "time"

// Permission represents the `permissions` table.
type Permission struct {
	ID    uint   `gorm:"primaryKey" json:"id"`
	Title string `gorm:"size:255" json:"title"`
	Name  string `gorm:"size:255;not null;unique" json:"name"`
	Group string `gorm:"size:255" json:"group"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (Permission) TableName() string {
	return "permissions"
}
