FROM node:16

WORKDIR /app/front

COPY package*.json ./

RUN yarn
RUN yarn build

EXPOSE 3000

COPY . .

CMD ["pm2", "start", "yarn", "--name", "'next'" ,"--", "start"]
