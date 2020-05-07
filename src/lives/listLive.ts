module.exports.handler = async (event, context, callback) => {
  console.log("hoihoihoi")
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      },
      body: "<h1>7777777777777777777777</h1>"
    });
};
