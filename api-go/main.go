package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"

	"github.com/trongtri1512/processmaker-go/controllers"
	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/middleware"
	"github.com/trongtri1512/processmaker-go/routes"
	"github.com/gofiber/template/html/v2"
)

func main() {
	// Load environment variables
	_ = godotenv.Load("../.env")
	_ = godotenv.Load(".env")

	// Initialize Database
	database.Connect()

	// Load Laravel Passport / Go API RSA keys
	if err := middleware.LoadPublicKey("../storage/oauth-public.key"); err != nil {
		// Try alternate path (for Docker)
		if err2 := middleware.LoadPublicKey("/var/www/html/storage/oauth-public.key"); err2 != nil {
			log.Println("⚠️  No RSA public key found. JWT auth will use HMAC fallback.")
		} else {
			log.Println("✅ Loaded RSA Public Key (Docker path)")
		}
	} else {
		log.Println("✅ Loaded RSA Public Key")
	}

	// Load private key for issuing JWTs (login endpoint)
	if err := controllers.LoadPrivateKey("../storage/oauth-private.key"); err != nil {
		if err2 := controllers.LoadPrivateKey("/var/www/html/storage/oauth-private.key"); err2 != nil {
			log.Println("⚠️  No RSA private key found. Login will use HMAC fallback.")
		} else {
			log.Println("✅ Loaded RSA Private Key (Docker path)")
		}
	} else {
		log.Println("✅ Loaded RSA Private Key")
	}
	engine := html.New("./views", ".html")

	app := fiber.New(fiber.Config{
		AppName:   "ProcessMaker Go API v1.0",
		BodyLimit: 50 * 1024 * 1024, // 50 MB
		Views:     engine,
	})

	// Middleware
	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
	}))

	// Setup routes
	routes.Setup(app)

	log.Println("🚀 ProcessMaker Go BPMN Engine starting on :3000")
	log.Fatal(app.Listen(":3000"))
}
