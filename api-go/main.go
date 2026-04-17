package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"

	"github.com/trongtri1512/processmaker-go/database"
	"github.com/trongtri1512/processmaker-go/middleware"
	"github.com/trongtri1512/processmaker-go/routes"
)

func main() {
	// Load environment variables (from ../.env if needed, though Docker handles this)
	_ = godotenv.Load("../.env")

	// Initialize Database
	database.Connect()

	// Load Laravel Passport Public Key
	err := middleware.LoadPublicKey("../storage/oauth-public.key")
	if err != nil {
		log.Println("⚠️ Failed to load Laravel Passport public key. Protected routes will fail:", err)
	} else {
		log.Println("✅ Loaded Laravel Passport Public Key")
	}

	app := fiber.New(fiber.Config{
		AppName: "ProcessMaker Go API v1",
	})

	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))

	// Setup routes
	routes.Setup(app)

	log.Fatal(app.Listen(":3000"))
}
