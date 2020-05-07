module.exports.handler = async (event, context, callback) => {
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      },
      body: "<h1>helllo</h1>"
    });
};
