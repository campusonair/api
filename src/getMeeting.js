module.exports.handler = async (event, context, callback) => {
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({})
    });
};