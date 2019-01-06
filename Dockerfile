FROM dannyrfar/go-node-alpine:latest as builder
RUN mkdir /go/src/github.com/dannyrfar && mkdir /go/src/github.com/dannyrfar/go-api
WORKDIR  /go/src/github.com/dannyrfar/go-api
COPY . ./
RUN npm install -g concurrently
RUN npm run getdeps
RUN npm run compile

FROM scratch
COPY --from=builder /go/src/github.com/dannyrfar/go-api/assets /go/bin/go-api/assets
COPY --from=builder /go/src/github.com/dannyrfar/go-api/go-server /go/bin/go-api/go-server
EXPOSE 3000
WORKDIR /go/bin/go-api/
CMD ["./go-server"]