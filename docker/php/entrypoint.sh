#!/bin/bash
set -e

INSTALLED_MARKER="/var/www/html/storage/.installed"

echo "🚀 ProcessMaker Entrypoint starting..."

# Wait for MySQL to be ready
echo "⏳ Waiting for MySQL to be ready..."
until php -r "new PDO('mysql:host=${DB_HOST};port=${DB_PORT};dbname=${DB_DATABASE}', '${DB_USERNAME}', '${DB_PASSWORD}');" 2>/dev/null; do
    echo "   MySQL not ready yet, retrying in 3s..."
    sleep 3
done
echo "✅ MySQL is ready!"

# Wait for Redis to be ready
echo "⏳ Waiting for Redis to be ready..."
until php -r "
\$redis = new Redis();
\$redis->connect('${REDIS_HOST}', ${REDIS_PORT});
" 2>/dev/null; do
    echo "   Redis not ready yet, retrying in 3s..."
    sleep 3
done
echo "✅ Redis is ready!"

# First-time installation
if [ ! -f "$INSTALLED_MARKER" ]; then
    echo "🔧 First run detected. Running ProcessMaker installer..."

    # Remove any pre-baked .env so the installer is not blocked
    rm -f /var/www/html/.env

    php artisan processmaker:install \
        --no-interaction \
        --url="${APP_URL}" \
        --username="${PM_ADMIN_USERNAME:-admin}" \
        --password="${PM_ADMIN_PASSWORD:-processmaker2024!}" \
        --email="${PM_ADMIN_EMAIL:-admin@processmaker.local}" \
        --first-name="${PM_ADMIN_FIRST_NAME:-Admin}" \
        --last-name="${PM_ADMIN_LAST_NAME:-User}" \
        --db-host="${DB_HOST}" \
        --db-port="${DB_PORT}" \
        --db-name="${DB_DATABASE}" \
        --db-username="${DB_USERNAME}" \
        --db-password="${DB_PASSWORD}" \
        --redis-host="${REDIS_HOST}" \
        --broadcast-driver=redis \
        --echo-port=6001

    # Append extra runtime configs that the installer doesn't write
    {
        echo ""
        echo "REDIS_HOST=${REDIS_HOST}"
        echo "REDIS_PORT=${REDIS_PORT}"
        echo "REDIS_PASSWORD=${REDIS_PASSWORD}"
        echo "REDIS_CLIENT=phpredis"
        echo "BROADCAST_DRIVER=redis"
        echo "CACHE_DRIVER=redis"
        echo "QUEUE_CONNECTION=redis"
        echo "SESSION_DRIVER=redis"
        echo "PROXIES=*"
    } >> /var/www/html/.env

    php artisan config:clear
    php artisan passport:install --force || true
    php artisan storage:link || true

    # Create marker so we don't reinstall on restart
    touch "$INSTALLED_MARKER"
    echo "🎉 ProcessMaker installed successfully!"
else
    echo "✅ ProcessMaker already installed, skipping install step."
    php artisan config:clear
    php artisan cache:clear
fi

echo "▶️  Starting PHP-FPM..."
exec php-fpm
