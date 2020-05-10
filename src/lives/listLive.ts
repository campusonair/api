import * as lambda from 'aws-lambda';
// import AWS from 'aws-sdk';

type response = {
  statusCode: number,
  headers: object,
  body: string
}

export const handler = async (event: any, context: lambda.Context, callback: lambda.Callback) => {

  const response: response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({})
  }
  return callback(null, response);
};
