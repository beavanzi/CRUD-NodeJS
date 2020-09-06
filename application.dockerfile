FROM node:alpine
WORKDIR /user/crud 
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 5000
RUN npx knex migrate:latest
CMD npm start