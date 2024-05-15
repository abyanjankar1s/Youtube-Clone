# Use an official Node runtime as a parent image
FROM node:18 AS builder 

# Set the working directory in the container 
WORKDIR /app

# Install dependencies needed to download ffmpeg
RUN apt-get update && apt-get install -y curl ca-certificates

# Download and install ffmpeg binary
RUN curl -L -o /tmp/ffmpeg.tar.gz https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz \
    && tar -xvf /tmp/ffmpeg.tar.gz -C /tmp \
    && mv /tmp/ffmpeg-*-amd64-static/ffmpeg /usr/local/bin \
    && rm -rf /tmp/ffmpeg*

#Copy package.json and package-lock.json into the working directory
COPY package*json ./ 

#Install any needed packages specified in package.json
RUN npm install 

#Copy app source inside the docker image
COPY . .

#Make port 3000 available outside this container
EXPOSE 3000

#Define the command to run your app using CMD (only one CMD allowed)
CMD [ "npm", "start" ]

