#!/bin/bash

source /home/ec2-user/.bash_profile

# give permission
DIR="/home/ec2-user/hackathon/front"
sudo chmod -R 777 ${DIR}
pwd
cd ${DIR}
pwd

# insall modules
yarn

# build
yarn build

# start app in the background
pm2 start yarn --name 'next' -- start
