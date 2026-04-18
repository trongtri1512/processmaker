# Build Stage
FROM golang:1.24-alpine AS builder

WORKDIR /app

# Install git and certificates
RUN apk add --no-cache git ca-certificates tzdata

# Use auto toolchain to handle go.mod version requirements
ENV GOTOOLCHAIN=auto


# Copy go mod and sum files
COPY api-go/go.mod api-go/go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY api-go/ .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Final Stage
FROM alpine:latest

WORKDIR /app

# Copy certificates, timezone data, and the binary from builder
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /app/main .
COPY --from=builder /app/views ./views

# Copy public assets into the container so it's fully standalone
COPY public ./public

# Expose port
EXPOSE 3000

# Command to run the executable
CMD ["./main"]
