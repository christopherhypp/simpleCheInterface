FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev
EXPOSE 4200
RUN npm run start
