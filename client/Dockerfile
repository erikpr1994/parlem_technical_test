FROM node:latest

RUN apt update && apt install vim inotify-tools -y

USER node

RUN mkdir /home/node/client

WORKDIR /home/node/client

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .