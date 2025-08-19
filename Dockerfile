# Use Node.js 18 base image
FROM node:18

# Install Java (OpenJDK 17) and Python 3
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of your app
COPY . .

# Build Next.js app
RUN npm run build

# Expose port for Next.js
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]
