# CampusOnAir API

## Prerequisite

- AWS DynamoDB named `campusonair-connection-table` with HashKey named `connectionId` and SGI named `liveId-index`

## Features

- WebSocket server with API Gateway
- Signaling Server with Amazon Kinesis Video

## deploy

```shell
$ git clone git@github.com:campusonair/api.git
$ cd api
$ cp .envrc.sample .envrc
$ vi .envrc
$ yarn
$ npm run deploy
```
