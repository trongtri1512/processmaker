package models

import (
	"time"

	"gorm.io/gorm"
)

// User represents the `users` table in MySQL.
type User struct {
	ID                    uint           `gorm:"primaryKey" json:"id"`
	Username              string         `gorm:"size:255;not null;unique" json:"username"`
	Email                 string         `gorm:"size:255;not null;unique" json:"email"`
	Password              string         `gorm:"size:255;not null" json:"-"`
	Firstname             string         `gorm:"size:255" json:"firstname"`
	Lastname              string         `gorm:"size:255" json:"lastname"`
	Status                string         `gorm:"size:50;default:'ACTIVE'" json:"status"`
	Address               string         `gorm:"size:255" json:"address,omitempty"`
	City                  string         `gorm:"size:255" json:"city,omitempty"`
	State                 string         `gorm:"size:255" json:"state,omitempty"`
	Postal                string         `gorm:"size:255" json:"postal,omitempty"`
	Country               string         `gorm:"size:255" json:"country,omitempty"`
	Phone                 string         `gorm:"size:255" json:"phone,omitempty"`
	Fax                   string         `gorm:"size:255" json:"fax,omitempty"`
	Cell                  string         `gorm:"size:255" json:"cell,omitempty"`
	Title                 string         `gorm:"size:255" json:"title,omitempty"`
	Birthdate             *time.Time     `gorm:"type:date" json:"birthdate,omitempty"`
	Timezone              string         `gorm:"size:100;default:'UTC'" json:"timezone"`
	DatetimeFormat        string         `gorm:"size:100" json:"datetime_format,omitempty"`
	Language              string         `gorm:"size:50;default:'en'" json:"language"`
	IsAdministrator       bool           `gorm:"default:false" json:"is_administrator"`
	Avatar                string         `gorm:"size:255" json:"avatar,omitempty"`
	Meta                  string         `gorm:"type:text" json:"meta,omitempty"`
	ManagerID             *uint          `gorm:"column:manager_id" json:"manager_id,omitempty"`
	DelegationUserID      *uint          `gorm:"column:delegation_user_id" json:"delegation_user_id,omitempty"`
	ForceChangePassword   bool           `gorm:"default:false" json:"force_change_password"`
	PasswordChangedAt     *time.Time     `json:"password_changed_at,omitempty"`
	EmailTaskNotification bool           `gorm:"default:true" json:"email_task_notification"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

	// Computed
	Fullname string `gorm:"-" json:"fullname"`
}

func (User) TableName() string {
	return "users"
}

// AfterFind populates computed fields after loading from DB.
func (u *User) AfterFind(tx *gorm.DB) error {
	if u.Firstname == "" && u.Lastname == "" {
		u.Fullname = u.Username
	} else {
		u.Fullname = u.Firstname + " " + u.Lastname
	}
	return nil
}
