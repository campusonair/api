const AWS = require("aws-sdk");
const uuid = require("uuid");

const channelTableName = process.env.CHANNEL_TABLE;

module.exports.handler = async (event) => {
  const { principalId } = event; // Auth0 user sub

  const docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
  });
  const kinesisVideo = new AWS.KinesisVideo();

  let { Item: item } = await docClient
    .get({ TableName: channelTableName, Key: { principalId } })
    .promise();

  if (!item) {
    item = {
      channelName: uuid.v4(),
      principalId,
    };

    await kinesisVideo
      .createSignalingChannel({ ChannelName: item.channelName })
      .promise();

    await docClient
      .put({ TableName: channelTableName, Item: item })
      .promise();
  }

  return JSON.stringify(item);
};
