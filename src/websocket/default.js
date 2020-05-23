const util = require('util');
const AWS = require('aws-sdk');

/**
 * おうむ返しをする WebSocket 関数
 * @param {string} url API Gateway URL
 * @param {string} connectionId connectionId
 * @param {string} payload message body
 */
const sendMessageToClient = (url, connectionId, payload) =>
  new Promise((resolve, reject) => {
    const apigatewaymanagementapi = new AWS.ApiGatewayManagementApi({
      apiVersion: '2018-11-29',
      endpoint: url,
    });

    apigatewaymanagementapi.postToConnection(
      {
        ConnectionId: connectionId, // connectionId of the receiving ws-client
        Data: payload,
      },
      (err, data) => {
        if (err) {
          // console.log('err is', err);
          reject(err);
        }
        resolve(data);
      }
    );
  });

module.exports.handler = async (event) => {
  const { domainName, stage } = event.requestContext.domainName;
  // const senderConnectionId = event.requestContext.connectionId;

  const callbackUrlForAWS = util.format(
    util.format('https://%s/%s', domainName, stage)
  );

  const docclient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
  });
  const { CONNECTION_TABLE } = process.env;

  const param = {
    TableName: CONNECTION_TABLE,
    IndexName: 'liveId-index',
    KeyConditionExpression: '#l = :l',
    ExpressionAttributeNames: {
      '#l': 'liveId',
    },
    ExpressionAttributeValues: {
      ':l': 'test-live',
    },
  };

  const { Items = [] } = await docclient.query(param).promise();

  await Promise.all(
    Items.map((item) =>
      sendMessageToClient(callbackUrlForAWS, item.connectionId, event.body)
    )
  );

  return {
    statusCode: 200,
  };
};
