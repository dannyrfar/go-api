FROM dannyrfar/go-node-alpine:latest as builder
WORKDIR /usr/src/app
COPY ui ./ui
RUN cd ui && npm install && cd ../
RUN cd ui && ng build --output-path ../dist && cd ..

WORKDIR /go/github.com/dannyrfar/go-api
COPY server ./server
RUN cd server && go get && go build -o ../go-server

FROM nginx:1.13.12-alpine
COPY --from=builder /usr/src/app/dist/ui /usr/share/nginx/html
COPY --from=builder /go/github.com/dannyrfar/go-api/go-server /go-server
CMD ["./go-server"]