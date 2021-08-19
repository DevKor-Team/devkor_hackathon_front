FROM node:16

WORKDIR /app/front

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000


CMD ["pm2", "start", "yarn", "--name", "'next'" ,"--", "start"]
