FROM node:12.16.3
WORKDIR /code
ENV PORT=1000
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install

COPY . /code
CMD ["node", "server.js"]