FROM node:14.11.0-alpine
COPY . /connect
WORKDIR /connect
RUN npm install
RUN npm i -g ts-node
CMD npm run prod