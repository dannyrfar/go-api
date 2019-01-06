# Full Stack GoLang/Angular Reminders App

This project was an exercise to construct a full stack app using Go as a backend and AngularJS as the frontend. 

## Install dependencies
To install project dependencies run `npm run getdeps`.

## Run inside docker container
To run inside a docker container build the docker container using `docker build . -t full-stack-go-angular` then once complete `docker run -p 3000:3000 -t full-stack-go-angular`. Finally point your browser to `http://localhost:3000`.

## Running locally
### Normal run
To run the project locally run `npm start` then point your browser to `http://localhost:4200`. 
### Listen to live changes
To run the project while listening for file changes run `npm run start-dev` and point your browser to `http://localhost:4200`. Any file changes detected will trigger a recompile of either the Go or Angular code.

## Compiling
To compile the codebase to a final binary that is ready to be shipped, run `npm run compile`. The output is located in `assets/` and the go binary is called `go-server`.