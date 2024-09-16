# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Ensure the correct path for nginx.conf
COPY docker/nginx.conf /etc/nginx/nginx.conf
