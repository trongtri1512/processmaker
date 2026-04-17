FROM dunglas/frankenphp:1-php8.3

# System dependencies (no nginx needed – FrankenPHP IS the web server)
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev \
    zip unzip mariadb-client supervisor \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# PHP extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions gd imagick imap pdo_mysql zip bcmath redis sockets pcntl

# OPcache tuning for Octane (important!)
RUN { \
    echo "opcache.enable=1"; \
    echo "opcache.memory_consumption=256"; \
    echo "opcache.interned_strings_buffer=16"; \
    echo "opcache.max_accelerated_files=20000"; \
    echo "opcache.validate_timestamps=0"; \
    echo "opcache.save_comments=1"; \
    echo "opcache.enable_cli=1"; \
} > /usr/local/etc/php/conf.d/opcache-octane.ini

# Node.js 20 (for npm run dev)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs && apt-get clean

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Application source
WORKDIR /var/www/html
COPY . /var/www/html

# Permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache || true

# Install PHP deps + laravel/octane (build-time stub .env using sqlite to avoid DB connection errors)
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN printf 'APP_NAME=ProcessMaker\nAPP_ENV=production\nAPP_KEY=\nAPP_DEBUG=false\nAPP_URL=http://localhost\nDB_CONNECTION=sqlite\nDB_DATABASE=:memory:\nCACHE_DRIVER=array\nQUEUE_CONNECTION=sync\nSESSION_DRIVER=array\nREDIS_HOST=localhost\n' > .env \
    && composer install --no-interaction --optimize-autoloader --ignore-platform-reqs \
    && composer require laravel/octane:^2.0 --no-interaction --ignore-platform-reqs \
    && rm .env

# Build frontend assets
RUN npm install && npm run dev || true

# Supervisor (horizon only – octane replaces nginx+fpm)
RUN mkdir -p /var/log/supervisor
COPY docker/php/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/php/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
