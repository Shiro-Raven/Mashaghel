FROM node:8

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

RUN $(npm bin)/ng build --prod --aot --output-path=dist

CMD ["npm","start"]