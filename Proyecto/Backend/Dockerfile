FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "run", "start"]