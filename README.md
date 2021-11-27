# Nightscout and Mongo (docker-compose)

this project aims to provide an easy way to install nightscout and docker using docker-compose while saving the database and the config files outside the conatiners for persistancy, and also to be able to start from an existing databse.

## Prerequisites :
- Install docker and docker compose

## Usage :
- modify the key inside the `.env` file, and maybe other params to your liking ;)
- [optional] to restore an old mongo db, simply place the db files inside `./mongodb/db/`
- inside the diredtory run : `docker-compose up -d`

## Tested on :
- Raspberry pi 4 running Raspberry Pi OS (bullseye)
- Windows 10 64bit