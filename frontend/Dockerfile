FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

EXPOSE 3000 
RUN mkdir -p /app
WORKDIR /app

COPY vite.config.ts /app/vite.config.ts
COPY package.json /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml

ENV NODE_OPTIONS=--openssl-legacy-provider
## install only the packages defined in the pnpm-lock.yaml (faster than the normal pnpm install)
RUN pnpm install

# Run 'pnpm run dev' when the container starts.
CMD ["pnpm", "dev"]
