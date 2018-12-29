FROM node:10.12-alpine

ADD . /app/service

WORKDIR /app/service

RUN yarn install --dev

RUN yarn build

CMD ["yarn", "start:prod"]
