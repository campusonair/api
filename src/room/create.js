'use strict';

module.exports.handler = (event, context, callback) => {
  const res = JSON.parse(event.body)
  console.log(res)

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(res)
  });
};
