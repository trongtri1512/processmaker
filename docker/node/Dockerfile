FROM node:16-alpine
RUN apk add --no-cache openssl
RUN mkdir -p /etc/nginx/ssl \
    && openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
       -keyout /etc/nginx/ssl/processmaker.local.processmaker.com.key \
       -out /etc/nginx/ssl/processmaker.local.processmaker.com.crt \
       -subj "/C=US/ST=State/L=City/O=Organization/CN=processmaker.local.processmaker.com"
COPY laravel-echo-server.json /var/www/html/laravel-echo-server.json
WORKDIR /var/www/html
