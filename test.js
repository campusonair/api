const AWS = require('aws-sdk');

const main = async () => {
  const kinesisVideo = new AWS.KinesisVideo({ region: 'ap-northeast-1' })
  const result = await kinesisVideo.createSignalingChannel({ ChannelName: "hello" }).promise()
  console.log(result)
}
main()
