package controllers

import (
	"github.com/gofiber/fiber/v2"
)

// ShowLogin renders the login page UI.
func ShowLogin(c *fiber.Ctx) error {
	// Pass CSRF token and base variables normally created by layout.blade.php
	return c.Render("auth/login", fiber.Map{
		"Title": "Login",
	}, "layouts/layout")
}

// ShowProcesses renders the process listing UI.
func ShowProcesses(c *fiber.Ctx) error {
	// Usually this is protected. Since this is a POC, we will just render it.
	// In reality we should check JWT in cookie.
	return c.Render("processes/index", fiber.Map{
		"Title": "Processes",
		"User": fiber.Map{
			"ID":       1,
			"FullName": "Go Admin",
		},
		"Config": fiber.Map{
			"status": "active",
		},
	}, "layouts/layout")
}
