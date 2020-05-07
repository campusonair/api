module.exports.handler = async (event, context, callback) => {
  console.log(event.pathParameters.liveId)
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({})
    });
};
