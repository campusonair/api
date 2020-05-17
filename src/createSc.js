const AWS = require("aws-sdk");

const createSignalingChannel = async (channelName, region) => {

  console.log(1)
  const kinesisVideoClient = new AWS.KinesisVideo({
    region: region
  });

  const result = await kinesisVideoClient.createSignalingChannel({
    ChannelName: channelName,
  }).promise();

  console.log(result)

  console.log(2)
  // Get signaling channel ARN
  // const describeSignalingChannelResponse = await kinesisVideoClient.describeSignalingChannel({
  //   ChannelName: channelName,
  // }).promise();
  // console.log(3)
  // const channelARN = describeSignalingChannelResponse.ChannelInfo.ChannelARN;
  // return channelARN;
}

module.exports.handler = async (event, context, callback) => {

  const channelARN = await createSignalingChannel('TestChannel2', 'ap-northeast-1')
  console.log({ channelARN })

  // {
  //   "Version": "2012-10-17",
  //     "Statement": [
  //       {
  //         "Sid": "kvsViewerPolicy",
  //         "Action": [
  //           "kinesisvideo:ConnectAsViewer", // Use "kinesisvideo:ConnectAsMaster" for master policy instead.
  //           "kinesisvideo:DescribeSignalingChannel",
  //           "kinesisvideo:GetIceServerConfig",
  //           "kinesisvideo:GetSignalingChannelEndpoint"
  //         ],
  //         "Effect": "Allow",
  //         "Resource": "arn:aws:kinesisvideo:<region>:<account_ID>:channel/<channelName>/<creationTime>"
  //       }
  //     ]
  // }

  // return callback(null,
  //   {
  //     statusCode: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({ credentials })
  //   });
};
