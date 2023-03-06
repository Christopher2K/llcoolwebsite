FROM node:18-alpine3.15 as base

ARG CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME}

ARG CLOUDINARY_API_KEY
ENV CLOUDINARY_API_KEY=${CLOUDINARY_API_KEY}

ARG CLOUDINARY_API_SECRET
ENV CLOUDINARY_API_SECRET=${CLOUDINARY_API_SECRET}

RUN corepack enable

FROM base as build

WORKDIR /app

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm i

FROM base as application

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY ./ ./

RUN pnpm run build

FROM caddy:alpine

COPY --from=application /app/dist /srv/

COPY ./Caddyfile /etc/caddy/Caddyfile

