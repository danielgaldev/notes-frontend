FROM node:alpine
RUN mkdir /code
WORKDIR /code
ADD . /code/
