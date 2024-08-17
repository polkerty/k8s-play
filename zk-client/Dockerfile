FROM node:latest
ADD app/ app/
WORKDIR /app
RUN npm install
EXPOSE 9000
CMD ["node", "app.js"]
