#!/bin/bash

cd $HOME/roumpini

git pull origin

npm install

npm run stop

npm start

echo "Deployment completed!"