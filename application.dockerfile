FROM node:alpine
WORKDIR /user/crud 

COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 5000

RUN npx knex migrate:latest

CMD npm test && npm start
