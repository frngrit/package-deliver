# Stage 1: Build the React app
FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN cat package.json
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
