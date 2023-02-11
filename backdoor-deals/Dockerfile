FROM node:19-alpine3.16
WORKDIR /app
COPY . .
RUN npm ci
# Build the app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "dev" ]