FROM node:18-alpine3.15 as base

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

