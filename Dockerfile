FROM node:12-alpine

WORKDIR /alura_challenge

COPY . .

RUN npm install

CMD ["node" , "app.js"]

EXPOSE 3000