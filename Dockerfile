FROM node:17-alpine3.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "start"]

# Apontar a porta 3000 local para a porta 3000 do container na criação
EXPOSE 3000