FROM node:alpine
RUN mkdir /code
WORKDIR /code
COPY package.json /code
RUN npm install
COPY src/ /code/src
