FROM ghcr.io/hazmi35/node:20-dev-alpine as build-stage

RUN corepack enable && corepack prepare pnpm@latest

COPY package*.json .
COPY pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

RUN pnpm prune --production

FROM ghcr.io/hazmi35/node:20-alpine

COPY --from=build-stage /tmp/build/next.config.js ./next.config.js
COPY --from=build-stage /tmp/build/package.json .
COPY --from=build-stage /tmp/build/public ./public
COPY --from=build-stage /tmp/build/.next/ ./.next
COPY --from=build-stage /tmp/build/node_modules ./node_modules

CMD ["next", "start"]