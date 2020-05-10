import * as lambda from 'aws-lambda';
import * as AWS from 'aws-sdk';

type response = {
  statusCode: number,
  headers: object,
  body: string
}

export const handler = async (event: any, context: lambda.Context, callback: lambda.Callback) => {

  const medialive = new AWS.MediaLive({ apiVersion: '2017-10-14' });
  const params: AWS.MediaLive.CreateChannelRequest = require('./ChannelConfig.json');

  medialive.createChannel(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
  });

  const response: response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({})
  }
  return callback(null, response);
};
