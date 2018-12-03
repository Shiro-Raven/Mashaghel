# Mashaghel

Your go-to to-do web app. Build with :heart: using MEAN stack, with the help of Redis, Docker, Git, and Google Maps.

## How to run the program:- 

**WARNING** Docker configurations were only tested on Docker Toolbox running on Windows 8.1. The environment variables provide the IP of the entry point and shall be changed accordingly in a `src/environment/environment.prod.ts` file.

[TL;DR]   Just run `docker-compose up` in a terminal in the root directory of the project. Just make sure you have docker installed. And an internet connection :stuck_out_tongue: 

1) The app utilizes NPM (node package manager) for managing the dependencies of the app as well as the APIs required to communicate with the backing services (MongoDB and Redis). You need do nothing about them. They are installed automatically in the Dockerfile script `RUN npm install`, which installs all the libraries (in the specified version) needed listed in the `package.json` file.
2) Two environment files are set in the docker-compose.yml file: `NODE_ENV`; which differentiates the environment node is running in, and `REDIS_URL`; which is the URL needed to connect to the Redis server.
3) The `Dockerfile` in the root directory is needed to start the application ONLY. There are no `Dockerfile`s to run the backing services. The flag `-p 3000:3000` is needed to access the container from your browser. And `-e "NODE_ENV=prod" -e "REDIS_URL=redis://cache"` is needed to set the variables. You might like to add the flag `-t mashaghel` flag to make it easier to deal with the container later.
4) We are using MongoDB as our main database service for storing users and their To-Dos. We are also using Redis as a pseudo-queue for sending the reminder emails. We thought Redis can be used as a persistent cache for the emails to be sent in case of blackouts, fire, etc. The `docker-compose.yml` file is responsible for running the backing services and the application. So only this file is needed to see the magic happen on your browser. One more service we are using is the Google Maps API, which is managed in Angular only and thus is not included in the Compose file.
