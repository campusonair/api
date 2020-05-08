// import * as AWS from 'aws-sdk';

// module.exports.handler = async (event: any) => {

//   const docclient = new AWS.DynamoDB.DocumentClient({
//     apiVersion: "2012-08-10",
//   });

//   const { CONNECTION_TABLE } = process.env;
//   const { connectionId } = event.requestContext;

//   type Props = {
//     TableName: any,
//     Item: {
//       connectionId: any,
//       liveId: string
//     }
//   }

//   let table: Props = {
//     TableName: CONNECTION_TABLE,
//     Item: {
//       connectionId,
//       liveId: "test-live",
//     },
//   }

//   await docclient
//     .put(table)
//     .promise();

//   return { statusCode: 200 };
// };
