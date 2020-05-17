# CampusOnAir API

## Prerequisite

- AWS DynamoDB Tables:
  - `campusonair-connection-table` with a hash key named `connectionId` and a secondary global index named `liveId-index`
  - `campusonair-channel-table` with a hash key named `principalId` and a secondary global index named `channelName-index`

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
