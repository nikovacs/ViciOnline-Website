# Etapa de construção
FROM node:18 AS build

WORKDIR /app

# Copie os arquivos de projeto para o container
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Execute o build
RUN yarn build

# Etapa de produção
FROM nginx:alpine

# Copie o conteúdo da pasta /dist para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copie o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80
