package controllers

import (
	"crypto/rsa"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/models"
	"golang.org/x/crypto/bcrypt"
)

var signingKey *rsa.PrivateKey

// LoadPrivateKey loads the RSA private key for signing JWTs
func LoadPrivateKey(path string) error {
	keyBytes, err := os.ReadFile(path)
	if err != nil {
		return err
	}
	signingKey, err = jwt.ParseRSAPrivateKeyFromPEM(keyBytes)
	return err
}

// Login handles POST /login
// Accepts username + password, returns a JWT compatible with the existing middleware.
func Login(c *fiber.Ctx) error {
	type LoginRequest struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	var body LoginRequest
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if body.Username == "" || body.Password == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Username and password are required"})
	}

	// Find user by username
	var user models.User
	if err := database.DB.Where("username = ? AND status = ?", body.Username, "ACTIVE").First(&user).Error; err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	// Verify password (bcrypt)
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password)); err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	// Generate JWT
	token, err := generateJWT(user)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}

	return c.JSON(fiber.Map{
		"access_token": token,
		"token_type":   "Bearer",
		"expires_in":   86400,
		"user":         user,
	})
}

func generateJWT(user models.User) (string, error) {
	now := time.Now()
	claims := jwt.MapClaims{
		"sub": user.ID,
		"iat": now.Unix(),
		"exp": now.Add(24 * time.Hour).Unix(),
		"aud": []string{"processmaker-go"},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)

	if signingKey != nil {
		return token.SignedString(signingKey)
	}

	// Fallback: HMAC signing with a secret (for dev without RSA keys)
	hmacToken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "processmaker-go-dev-secret"
	}
	return hmacToken.SignedString([]byte(secret))
}
