FROM node:16

WORKDIR /app/front

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000


CMD ["./node_modules/.bin/pm2-runtime", "start", "yarn", "--interpreter", "bash", "--name", "'next'" ,"--", "start"]