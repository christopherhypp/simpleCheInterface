# Build Angular App
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/simpleCheInterface/ /usr/share/nginx/html
EXPOSE 80

# Serve Application using Npm
#CMD ["npm", "start"]
#EXPOSE 4200
