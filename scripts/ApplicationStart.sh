#!/bin/bash

# give permission
DIR="/home/ec2-user/hackathon/front"
chmod -R u+w ${DIR}


export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)


# insall modules
yarn

# build
yarn build

# start app in the background
pm2 start yarn --name 'next' -- start