# Stage 1: Build the React app
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN cat package.json

# Bundle app source
COPY . .
RUN npm install
RUN npm run build

# # Stage 2: Create the production image
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/default.conf /etc/nginx/conf.d/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
