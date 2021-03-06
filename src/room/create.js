'use strict';

module.exports.handler = (event, context, callback) => {
  const res = JSON.parse(event.body)

  const body = JSON.parse(event.body)
  const peerId = body.peerId
  console.log(peerId)

  const idToken = body.idToken
  console.log(idToken)

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(res)
  });
};
