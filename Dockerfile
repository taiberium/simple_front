#FROM node:13 as builder
#WORKDIR /app
#COPY package.json ./
#COPY public/ public/
#COPY src/ src/
#RUN npm install
#RUN npm run build

FROM nginx:1.13
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf