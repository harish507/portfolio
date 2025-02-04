# Use a multi-stage build to reduce the final image size
FROM node:14-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies (including dev dependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# -- Final Production Image --
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist  # Change this path if using Angular/Next.js

# Install only production dependencies
RUN npm prune --production

# Expose port (change if necessary)
EXPOSE 4200

# Start the application
CMD ["npm", "start"]
