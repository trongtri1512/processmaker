#!/bin/bash
set -e

INSTALLED_MARKER="/var/www/html/storage/.installed"

echo "🚀 ProcessMaker API starting..."

# Wait for MySQL
echo "⏳ Waiting for MySQL..."
until php -r "new PDO('mysql:host=${DB_HOST};port=${DB_PORT};dbname=${DB_DATABASE}', '${DB_USERNAME}', '${DB_PASSWORD}');" 2>/dev/null; do
    echo "   MySQL not ready, retrying in 3s..."
    sleep 3
done
echo "✅ MySQL ready!"

# Wait for Redis
echo "⏳ Waiting for Redis..."
until php -r "\$r = new Redis(); \$r->connect('${REDIS_HOST}', ${REDIS_PORT:-6379});" 2>/dev/null; do
    echo "   Redis not ready, retrying in 3s..."
    sleep 3
done
echo "✅ Redis ready!"

# First-time install
if [ ! -f "$INSTALLED_MARKER" ]; then
    echo "🔧 First run – running ProcessMaker installer..."
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
        --db-port="${DB_PORT:-3306}" \
        --db-name="${DB_DATABASE}" \
        --db-username="${DB_USERNAME}" \
        --db-password="${DB_PASSWORD}" \
        --redis-host="${REDIS_HOST}" \
        --broadcast-driver=redis \
        --echo-port=6001

    # Append all extra env vars the installer doesn't write
    cat >> /var/www/html/.env <<EOF

# Redis
REDIS_HOST=${REDIS_HOST}
REDIS_PORT=${REDIS_PORT:-6379}
REDIS_PASSWORD=${REDIS_PASSWORD:-null}
REDIS_CLIENT=phpredis

# Drivers
BROADCAST_DRIVER=redis
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

# Proxy (for PaaS / Traefik)
PROXIES=*
EOF

    php artisan config:clear
    php artisan passport:install --force || true
    php artisan storage:link || true

    touch "$INSTALLED_MARKER"
    echo "🎉 ProcessMaker installed successfully!"
else
    echo "✅ Already installed – skipping install."
    php artisan config:clear
    php artisan cache:clear || true
fi

echo "▶️  Starting Supervisor (Octane/FrankenPHP + horizon)..."
exec supervisord -c /etc/supervisor/conf.d/supervisord.conf
