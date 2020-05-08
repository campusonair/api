import * as lambda from 'aws-lambda';

export const handler = async (event: any, context: lambda.Context, callback: lambda.Callback) => {
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Content-type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      },
      body: '<h1>Hello</h1>'
    });
};
