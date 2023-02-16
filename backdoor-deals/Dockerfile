FROM node:19-alpine3.16
WORKDIR /app
COPY package*.json ./
# Build the app
COPY . .
RUN npm install -g && npm install 
EXPOSE 3000
CMD [ "next", "dev" ]
