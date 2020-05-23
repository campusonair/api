const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const docclient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
  });
  const { CONNECTION_TABLE } = process.env;
  const { connectionId } = event.requestContext;

  await docclient
    .put({
      TableName: CONNECTION_TABLE,
      Item: {
        connectionId,
        liveId: 'test-live',
      },
    })
    .promise();

  return { statusCode: 200 };
};
