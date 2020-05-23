'use strict';
const verify = require('./verify').verify

module.exports.handler = (event, context, callback) => {

  const res = JSON.parse(event.body)
  const result = verify(res.idToken)

  if(result.message){
    callback(null, {
      statusCode: 400,
      body: 'Bad Request'
    });
  }else{
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(res)
    });
  }
};
