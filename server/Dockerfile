FROM node:latest

RUN apt update && apt install vim inotify-tools -y

RUN npm i -g nodemon

EXPOSE 49153

RUN mkdir /home/node/server

WORKDIR  /home/node/server

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .