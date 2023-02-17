FROM node:latest

WORKDIR /app

COPY ./package.json ./

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install --silent

EXPOSE 3000

CMD ["next", "dev"]  
