FROM node:20-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# copy over package.json files
COPY package.json /app/

# install all depencies
RUN pnpm install

# copy over all files to the work directory
ADD . /app

# build the project
RUN pnpm build

# start final image
FROM node:20-slim

WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.nuxt /app/.nuxt
COPY --from=builder /app/.output /app/.output

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]