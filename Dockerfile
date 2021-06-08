FROM node:14 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci

RUN npm install pm2 -g

COPY . .

RUN npx tsc -p ./tsconfig.json

EXPOSE 8000

CMD [ "pm2-runtime", "build/main.js" ]