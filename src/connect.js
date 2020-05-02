const AWS = require("aws-sdk");

module.exports.handler = (event, context, callback) => {
  const docclient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
  });
  const { CONNECTION_TABLE } = process.env;
  const { connectionId } = event.requestContext;

  // docclient.put({
  //   TableName: CONNECTION_TABLE,
  //   Item: {
  //     connectionId,
  //   },
  // });

  console.log(event, context);
  callback(null, { statusCode: 200 });
};
