FROM node:20-slim AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc pnpm install --ignore-scripts --frozen-lockfile

COPY . .

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["pnpm", "start", "--host"]
