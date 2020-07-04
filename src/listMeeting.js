module.exports.handler = async (event, context, callback) => {
  console.log("-----------------------------------------")
  console.log("helllo")
  console.log(event)
  console.log(context)
  return callback(null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({})
    });
};