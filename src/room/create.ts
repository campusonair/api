'use strict';

module.exports.handler = (event, context, callback) => {

  console.log(event)

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({})
  });
};
