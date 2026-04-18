package models

import (
	"time"

	"gorm.io/gorm"
)

// ProcessCategory represents the `process_categories` table.
type ProcessCategory struct {
	ID       uint           `gorm:"primaryKey" json:"id"`
	Name     string         `gorm:"size:255;not null" json:"name"`
	Status   string         `gorm:"size:50;default:'ACTIVE'" json:"status"`
	IsSystem bool           `gorm:"default:false" json:"is_system"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

func (ProcessCategory) TableName() string {
	return "process_categories"
}

// Screen represents the `screens` table.
type Screen struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Title       string         `gorm:"size:255;not null" json:"title"`
	Description string         `gorm:"type:text" json:"description,omitempty"`
	Type        string         `gorm:"size:50;default:'FORM'" json:"type"`
	Config      string         `gorm:"type:longtext" json:"config,omitempty"`
	Computed    string         `gorm:"type:longtext" json:"computed,omitempty"`
	Watchers    string         `gorm:"type:longtext" json:"watchers,omitempty"`
	CustomCSS   string         `gorm:"column:custom_css;type:longtext" json:"custom_css,omitempty"`
	Status      string         `gorm:"size:50;default:'ACTIVE'" json:"status"`
	CategoryID  *uint          `gorm:"column:screen_category_id" json:"screen_category_id,omitempty"`
	Key         string         `gorm:"column:key;size:255" json:"key,omitempty"`
	Label       string         `gorm:"size:255" json:"label,omitempty"`
	IsDefault   bool           `gorm:"column:is_default;default:false" json:"is_default"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

	// Relations
	Category *ScreenCategory `gorm:"foreignKey:CategoryID" json:"category,omitempty"`
}

func (Screen) TableName() string {
	return "screens"
}

// ScreenCategory represents the `screen_categories` table.
type ScreenCategory struct {
	ID     uint           `gorm:"primaryKey" json:"id"`
	Name   string         `gorm:"size:255;not null" json:"name"`
	Status string         `gorm:"size:50;default:'ACTIVE'" json:"status"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

func (ScreenCategory) TableName() string {
	return "screen_categories"
}

// Script represents the `scripts` table.
type Script struct {
	ID               uint           `gorm:"primaryKey" json:"id"`
	Key              string         `gorm:"size:255;unique" json:"key"`
	Title            string         `gorm:"column:title;size:255;not null" json:"title"`
	Description      string         `gorm:"type:text" json:"description,omitempty"`
	Language         string         `gorm:"size:50;default:'php'" json:"language"`
	Code             string         `gorm:"type:longtext" json:"code,omitempty"`
	Status           string         `gorm:"size:50;default:'ACTIVE'" json:"status"`
	CategoryID       *uint          `gorm:"column:script_category_id" json:"script_category_id,omitempty"`
	RunAsUserID      *uint          `gorm:"column:run_as_user_id" json:"run_as_user_id,omitempty"`
	Timeout          int            `gorm:"default:60" json:"timeout"`
	RetryAttempts    int            `gorm:"column:retry_attempts;default:0" json:"retry_attempts"`
	RetryWaitTime    int            `gorm:"column:retry_wait_time;default:0" json:"retry_wait_time"`
	ScriptExecutorID *uint          `gorm:"column:script_executor_id" json:"script_executor_id,omitempty"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

	Category       *ScriptCategory `gorm:"foreignKey:CategoryID" json:"category,omitempty"`
	RunAsUser      *User           `gorm:"foreignKey:RunAsUserID" json:"run_as_user,omitempty"`
	ScriptExecutor *ScriptExecutor `gorm:"foreignKey:ScriptExecutorID" json:"script_executor,omitempty"`
}

func (Script) TableName() string {
	return "scripts"
}

// ScriptExecutor represents the `script_executors` table.
type ScriptExecutor struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Title       string         `gorm:"size:255;not null" json:"title"`
	Description string         `gorm:"type:text" json:"description,omitempty"`
	Language    string         `gorm:"size:50;not null" json:"language"`
	Config      string         `gorm:"type:text" json:"config,omitempty"`
	IsSystem    bool           `gorm:"default:false" json:"is_system"`
	Type        string         `gorm:"size:50" json:"type,omitempty"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

func (ScriptExecutor) TableName() string {
	return "script_executors"
}

// ScriptCategory represents the `script_categories` table.
type ScriptCategory struct {
	ID     uint           `gorm:"primaryKey" json:"id"`
	Name   string         `gorm:"size:255;not null" json:"name"`
	Status string         `gorm:"size:50;default:'ACTIVE'" json:"status"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

func (ScriptCategory) TableName() string {
	return "script_categories"
}

// Comment represents the `comments` table.
type Comment struct {
	ID              uint   `gorm:"primaryKey" json:"id"`
	UserID          uint   `gorm:"column:user_id" json:"user_id"`
	CommentableID   string `gorm:"column:commentable_id;size:255" json:"commentable_id"`
	CommentableType string `gorm:"column:commentable_type;size:255" json:"commentable_type"`
	Subject         string `gorm:"size:255" json:"subject,omitempty"`
	Body            string `gorm:"type:text" json:"body"`
	Hidden          bool   `gorm:"default:false" json:"hidden"`
	Type            string `gorm:"size:50;default:'LOG'" json:"type"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`

	User *User `gorm:"foreignKey:UserID" json:"user,omitempty"`
}

func (Comment) TableName() string {
	return "comments"
}

// Notification represents the `notifications` table.
type Notification struct {
	ID             string `gorm:"primaryKey;size:36" json:"id"`
	Type           string `gorm:"size:255" json:"type"`
	NotifiableType string `gorm:"size:255" json:"notifiable_type"`
	NotifiableID   uint   `gorm:"column:notifiable_id" json:"notifiable_id"`
	Data           string `gorm:"type:text" json:"data"`
	ReadAt         *time.Time `json:"read_at,omitempty"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (Notification) TableName() string {
	return "notifications"
}

// Setting represents the `settings` table.
type Setting struct {
	ID     uint   `gorm:"primaryKey" json:"id"`
	Key    string `gorm:"size:255;unique;not null" json:"key"`
	Config string `gorm:"type:longtext" json:"config"`
	Name   string `gorm:"size:255" json:"name,omitempty"`
	Helper string `gorm:"type:text" json:"helper,omitempty"`
	Group  string `gorm:"size:255" json:"group,omitempty"`
	Format string `gorm:"size:50" json:"format,omitempty"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (Setting) TableName() string {
	return "settings"
}

// EnvironmentVariable represents the `environment_variables` table.
type EnvironmentVariable struct {
	ID          uint   `gorm:"primaryKey" json:"id"`
	Name        string `gorm:"size:255;not null" json:"name"`
	Description string `gorm:"type:text" json:"description,omitempty"`
	Value       string `gorm:"type:text" json:"value"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (EnvironmentVariable) TableName() string {
	return "environment_variables"
}

// ProcessTaskAssignment represents the `process_task_assignments` table.
type ProcessTaskAssignment struct {
	ID             uint   `gorm:"primaryKey" json:"id"`
	ProcessID      uint   `gorm:"column:process_id" json:"process_id"`
	ProcessTaskID  string `gorm:"column:process_task_id;size:255" json:"process_task_id"` // BPMN node ID
	AssignmentID   uint   `gorm:"column:assignment_id" json:"assignment_id"`
	AssignmentType string `gorm:"column:assignment_type;size:255" json:"assignment_type"` // User or Group

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (ProcessTaskAssignment) TableName() string {
	return "process_task_assignments"
}

// ProcessLaunchpad represents the `process_launchpad` table.
type ProcessLaunchpad struct {
	ID         string `gorm:"primaryKey;size:36" json:"id"`
	UserID     uint   `gorm:"column:user_id" json:"user_id"`
	ProcessID  uint   `gorm:"column:process_id" json:"process_id"`
	Properties string `gorm:"type:text" json:"properties,omitempty"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`

	User    *User    `gorm:"foreignKey:UserID" json:"user,omitempty"`
	Process *Process `gorm:"foreignKey:ProcessID" json:"process,omitempty"`
}

func (ProcessLaunchpad) TableName() string {
	return "process_launchpad"
}

