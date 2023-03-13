FROM node:16-slim

COPY package.json package-lock.json .

RUN npm install

COPY index.js .

CMD node index.js