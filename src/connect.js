module.exports.handler = (event, context, callback) => {
  const { connectionId } = event.requestContext;
  console.log(event, context);
  callback(null, { statusCode: 200 });
};
