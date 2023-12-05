FROM node:latest as node

WORKDIR /app

COPY . .


FROM nginx

RUN rm -rf /usr/share/nginx/html/*

#COPY  --from=node /app/nginx/*  /etc/nginx/conf.d/default.conf
COPY --from=node /app/. /usr/share/nginx/html
EXPOSE 80