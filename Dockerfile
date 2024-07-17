#Build stage
FROM node:22.2.0-bullseye-slim as build

# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /app

COPY --chown=node:node package*.json /app

RUN npm install

COPY --chown=node:node . .

RUN npm run build

#Production stage
FROM node:22.2.0-bullseye-slim AS production

ENV NODE_ENV production

# COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init

WORKDIR /app

COPY --chown=node:node package*.json /app

RUN npm i 

RUN npm i -g serve

COPY --chown=node:node --from=build /app/dist /app/dist

USER node

EXPOSE 8080

CMD [ "serve", "-p", "8080", "-s", "dist" ]