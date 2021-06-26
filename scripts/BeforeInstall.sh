#!/bin/bash

# download node and npm
DIR="/home/ec2-user/hackathon/front"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir -p ${DIR}
fi

