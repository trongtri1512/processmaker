package middleware

import (
	"crypto/rsa"
	"fmt"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
)

var publicKey *rsa.PublicKey

// LoadPublicKey reads the Laravel Passport public key
func LoadPublicKey(path string) error {
	keyBytes, err := os.ReadFile(path)
	if err != nil {
		return fmt.Errorf("could not read public key: %v", err)
	}

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(keyBytes)
	if err != nil {
		return fmt.Errorf("could not parse public key: %v", err)
	}

	return nil
}

// Protected route middleware checks Laravel Passport Personal Access Tokens (JWT)
func Protected() fiber.Handler {
	return func(c *fiber.Ctx) error {
		authHeader := c.Get("Authorization")
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Missing or invalid Authorization header",
			})
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		// Parse the JWT token using the loaded public key
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return publicKey, nil
		})

		if err != nil || !token.Valid {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Invalid or expired token",
			})
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Failed to parse JWT claims",
			})
		}

		// Passport custom claim struct usually has "sub" (subject) as string user ID
		sub, ok := claims["sub"].(string)
		if !ok {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Token 'sub' claim is missing or invalid",
			})
		}

		// Query the database to ensure the user exists and active
		var user models.User
		if err := database.DB.Where("id = ? AND status = ?", sub, "ACTIVE").First(&user).Error; err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "User account inactive or not found",
			})
		}

		// Attach user to Fiber Context
		c.Locals("user", user)

		return c.Next()
	}
}

// AdminOnly middleware verifies that the authenticated user has is_administrator = true
func AdminOnly() fiber.Handler {
	return func(c *fiber.Ctx) error {
		user, ok := c.Locals("user").(models.User)
		if !ok || !user.IsAdministrator {
			return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
				"error": "Insufficient permissions. Admin only.",
			})
		}
		return c.Next()
	}
}
