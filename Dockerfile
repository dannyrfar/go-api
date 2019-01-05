FROM dannyrfar/go-node-alpine:latest
RUN mkdir /go/src/github.com/dannyrfar && mkdir /go/src/github.com/dannyrfar/go-api
WORKDIR  /go/src/github.com/dannyrfar/go-api
COPY . ./
RUN npm install -g concurrently
RUN npm run getdeps
EXPOSE 3000 4200
RUN cd /go/src/github.com/dannyrfar/go-api
ENTRYPOINT ["npm"]
CMD ["start"]