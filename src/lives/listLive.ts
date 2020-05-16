import * as lambda from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { SignalingClient, Role } from 'amazon-kinesis-video-streams-webrtc';

// import * as KVSWebRTC from 'amazon-kinesis-video-streams-webrtc';

type response = {
  statusCode: number,
  headers: object,
  body: string
}

type master = {
  signalingClient: SignalingClient | null,
}

export const handler = async (event: any, context: lambda.Context, callback: lambda.Callback) => {

  const kinesisVideoClient = new AWS.KinesisVideo({
    region: 'ap-northeast-1',
    accessKeyId: 'AKIA5BYUY6MH2D2CCJM3',
    secretAccessKey: '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'
  });

  const describeSignalingChannelResponse = await kinesisVideoClient
    .describeSignalingChannel({
      ChannelName: 'TestChannel',
    })
    .promise();

  const channelARN = describeSignalingChannelResponse.ChannelInfo?.ChannelARN || '';

  const getSignalingChannelEndpointResponse = await kinesisVideoClient.getSignalingChannelEndpoint({
    ChannelARN: channelARN,
    SingleMasterChannelEndpointConfiguration: {
      Protocols: ['WSS', 'HTTPS'],
      Role: Role.MASTER,
    },
  }).promise();

  // websocket用のプロトコルとhttpsプロトコルのエンドポイント取得。
  const endpointsByProtocol = getSignalingChannelEndpointResponse.ResourceEndpointList?.reduce((endpoints: any, endpoint: AWS.KinesisVideo.ResourceEndpointListItem) => {
    let key: string = endpoint.Protocol || '';
    endpoints[key] = endpoint.ResourceEndpoint;
    return endpoints;
  }, {});
  console.log('[MASTER] Endpoints: ', endpointsByProtocol);

  const master: master = {
    signalingClient: null,
  };

  master.signalingClient = new SignalingClient({
    channelARN,
    channelEndpoint: endpointsByProtocol.WSS,
    role: Role.MASTER,
    region: 'ap-northeast-1',
    credentials: {
      accessKeyId: 'AKIA5BYUY6MH2D2CCJM3',
      secretAccessKey: '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',
      sessionToken: '',
    },
    systemClockOffset: kinesisVideoClient.config.systemClockOffset,
  });

  // Get ICE server configuration ICEサーバーの設定はhttpsなんだ。httpsじゃないとNAT超えができないのかな？
  const kinesisVideoSignalingChannelsClient = new AWS.KinesisVideoSignalingChannels({
    region: 'ap-northeast-1',
    accessKeyId: 'AKIA5BYUY6MH2D2CCJM3',
    secretAccessKey: '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',
    sessionToken: '',
    endpoint: endpointsByProtocol.HTTPS,
    correctClockSkew: true,
  });

  const response: response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(master)
  }
  return callback(null, response);
};
