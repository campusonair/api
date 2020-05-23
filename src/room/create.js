'use strict';
const jwt = require('jsonwebtoken');

module.exports.handler = (event, context, callback) => {
  const res = JSON.parse(event.body)
  const decoded = jwt.decode(res.idToken);
  console.log(decoded)

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(res)
  });
};
