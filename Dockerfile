
# Stage 1
FROM node:latest-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run start --omit=dev
EXPOSE 4200
