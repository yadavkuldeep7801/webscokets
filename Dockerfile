# Use an official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your server code
COPY . .

# Expose port 3000 for WebSocket server
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
