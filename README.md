# Full Stack GoLang/Angular Reminders App

This project was an exercise to construct a full stack app using Go as a backend, MongoDB as the datastore and AngularJS as the frontend. 

## Prerequisites
This project assumes you have Go, Node and Docker setup on your machine. If you don't please install them and set them up before getting started.

## Cloning
When cloning make sure to clone to $GOPATH/github.com/dannyrfar/go-api on your local machine.

## Install dependencies
To install project dependencies run `npm run getdeps` from the root of the project folder.

## Running locally
### Initializing mongo
Before running locally install and start the mongo daemon. Set the `MONGODB_URL` locally using `export MONGODB_URL=mongodb://localhost:27017`.
### Normal run
To start run `npm start` then point your browser to `http://localhost:4200`. 
### Listen to live changes
To run the project while listening for file changes run `npm run start-dev` and point your browser to `http://localhost:4200`. Any file changes detected will trigger a recompile of either the Go or Angular code.

## Run inside docker container
To run inside a docker container build the docker container using `docker build . -t go-reminders` then once complete start the mongodb instance using `docker run --name mongo --rm -d mongo`. There is no need to install anything for mongo to run, that command is enough. Once mongo is up start the service using `docker run -it --link mongo:go-reminders -e "MONGODB_URL=mongodb://mongo:27017" -p 3000:3000 --rm go-reminders`. Finally point your browser to `http://localhost:3000`.

## Compiling
To compile the codebase to a final binary that is ready to be shipped, run `npm run compile`. The output is located in `assets/` and the go binary is called `go-server`.