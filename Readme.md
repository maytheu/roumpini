Run the server 
`npm start`

To deploy on aws
Configure environment
Install nodejs
`curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs`

Clone the repo
copy sample.env to .env
`mv sample.env .env`

start the app
`chmod +x deploy.sh
./deploy.sh`