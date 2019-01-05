FROM dannyrfar/go-node-alpine:latest as builder
WORKDIR /usr/src/app
COPY ui /usr/src/app/ui
RUN cd ui && npm install && cd ../
RUN cd ui && ng build --output-path /usr/src/app/dist

RUN mkdir /go/src/github.com && mkdir /go/src/github.com/dannyrfar && mkdir /go/src/github.com/dannyrfar/go-api && cd /go/src/github.com/dannyrfar/go-api
COPY server /go/src/github.com/dannyrfar/go-api/server
RUN cd /go/src/github.com/dannyrfar/go-api/server && go get && go build -o /go/src/github.com/dannyrfar/go-api/go-server

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN cd /
COPY --from=builder /go/src/github.com/dannyrfar/go-api/go-server /go-server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["./go-server"]