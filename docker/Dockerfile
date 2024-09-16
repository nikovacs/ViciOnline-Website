# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY ../package.json ../yarn.lock ./
RUN yarn install

# Copy application code
COPY ../ ./

# Build the React app
RUN yarn build

# Stage 2: Serve the app
FROM nginx:alpine

# Copy built app to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
