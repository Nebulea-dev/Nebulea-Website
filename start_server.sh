#! /bin/bash
source ${HOME}/.bashrc
PATH=$PATH:/home/webserver/.nvm/versions/node/v20.12.2/bin
cd /var/www/nextjs

echo $USER
echo $PATH
which npm | echo

/home/webserver/.nvm/versions/node/v20.12.2/bin/npm run build
/home/webserver/.nvm/versions/node/v20.12.2/bin/npm run start
