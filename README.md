# Full Stack GoLang/Angular Reminders App

This project was an exercise to construct a full stack app using Go as a backend and AngularJS as the frontend. 

## Install dependencies
To install project dependencies run `npm run getdeps`.

## Run inside docker container
To run inside a docker container build the docker container using `docker build . -t full-stack-go-angular` then once complete `docker run -p 4200:4200 -p 3000:3000 -t full-stack-go-angular`. Finally point your browser to `http://localhost:4200`.

## Running locally
To run the project locally run `npm start` then point your browser to `http://localhost:4200`.