FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .
RUN echo DATABASE_PORT
ENV DATABASE_PORT=3306 DATABASE_HOST=localhost DATABASE_USER=user DATABASE_PASSWORD=password DATABASE_NAME=package_db

EXPOSE 8081
CMD [ "node", "server.js" ]