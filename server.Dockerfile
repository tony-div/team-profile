# Use an official Node.js runtime as a base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json to the working directory
COPY package.json .

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]

# docker build -t team-profile-server -f server.Dockerfile .
# docker run -itd -p 80:3000 --name team-profile-server team-profile-server