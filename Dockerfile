FROM node:18-alpine
WORKDIR /usr/app
COPY ./build/ /usr/app
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "."]