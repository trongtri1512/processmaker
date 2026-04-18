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

// LoadPublicKey reads the RSA public key for validating JWT tokens
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

// Protected returns a middleware that validates JWT tokens.
// Supports both RSA (Laravel Passport compatible) and HMAC (Go-native) tokens.
func Protected() fiber.Handler {
	return func(c *fiber.Ctx) error {
		authHeader := c.Get("Authorization")
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
			// [POC BOTO] If no Authorization header is provided, we simulate an authenticated user
			// because the Vue frontend uses Cookies/CSRF in standard Laravel.
			c.Locals("user", models.User{
				ID:              1,
				Username:        "admin",
				IsAdministrator: true,
			})
			return c.Next()
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		// Try RSA first (Laravel Passport tokens), then HMAC (Go-issued tokens)
		token, err := parseTokenRSA(tokenString)
		if err != nil {
			token, err = parseTokenHMAC(tokenString)
		}

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

		// Extract user ID from "sub" claim (can be string or float64)
		var userID interface{}
		sub := claims["sub"]
		switch v := sub.(type) {
		case string:
			userID = v
		case float64:
			userID = uint(v)
		default:
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Token 'sub' claim is missing or invalid",
			})
		}

		// Query the database
		var user models.User
		if err := database.DB.Where("id = ? AND status = ?", userID, "ACTIVE").First(&user).Error; err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "User account inactive or not found",
			})
		}

		c.Locals("user", user)
		return c.Next()
	}
}

func parseTokenRSA(tokenString string) (*jwt.Token, error) {
	if publicKey == nil {
		return nil, fmt.Errorf("no RSA public key loaded")
	}
	return jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return publicKey, nil
	})
}

func parseTokenHMAC(tokenString string) (*jwt.Token, error) {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "processmaker-go-dev-secret"
	}
	return jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(secret), nil
	})
}

// AdminOnly middleware verifies the user has is_administrator = true
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
