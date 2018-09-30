FROM node:10.11-alpine

ADD . /app/service

WORKDIR /app/service

RUN yarn install --dev

RUN yarn build
