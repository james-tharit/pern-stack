FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

EXPOSE 4000
RUN mkdir -p /app
WORKDIR /app

##ignore if don't have react with typescript
COPY tsconfig.json /app/tsconfig.json 

COPY package.json /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml

## install only the packages defined in the pnpm-lock.yaml (faster than the normal pnpm install)
RUN pnpm install

# Run 'npm run dev' when the container starts.
CMD ["pnpm", "start"]