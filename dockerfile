# Stage 1: Build the application
FROM node:14-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm ci --production

# Copy the rest of the application code
COPY . .

RUN npm install

# Build the React app for production
RUN npm run build

# Stage 2: Serve the built application
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/dist .

# Expose the desired port (replace 8000 with your desired port number)
EXPOSE 8000

# Install the http-server package
RUN npm install -g http-server

# Set the command to run when the container starts
CMD ["http-server", "-p", "8000"]