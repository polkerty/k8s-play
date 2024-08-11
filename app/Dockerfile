FROM --platform=linux/amd64 node 
ADD app/ app/
# RUN apt-get update && apt-get install -y nodejs npm
WORKDIR app/
RUN npm install
EXPOSE 9000
CMD ["node", "app.js"]
 
