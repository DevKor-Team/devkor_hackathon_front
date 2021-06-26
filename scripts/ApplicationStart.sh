#!/bin/bash

# insall modules
yarn

# build
yarn build

# start app in the background
pm2 start yarn --name 'next' -- start