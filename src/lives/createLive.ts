import * as lambda from 'aws-lambda';
import AWS from 'aws-sdk';

export const handler = async (event: any, context: lambda.Context, callback: lambda.Callback) => {
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({})
    });
};
