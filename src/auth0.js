const jwt = require("jsonwebtoken");

// Set in `environment` of serverless.yml
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_PUBLIC_KEY = process.env.AUTH0_CLIENT_PUBLIC_KEY;

// Reusable Authorizer function, set on `authorizer` field in serverless.yml
module.exports.handler = (event, _1, callback) => {
  return callback("Unauthorized 0");
  if (!event.authorizationToken) {
    console.log(1)
    return callback("Unauthorized a");
  }

  const tokenParts = event.authorizationToken.split(" ");
  const tokenValue = tokenParts[1];

  if (!(tokenParts[0].toLowerCase() === "bearer" && tokenValue)) {
    // no auth token!
    console.log(2)
    return callback("Unauthorized b");
  }
  const options = {
    audience: AUTH0_CLIENT_ID,
  };

  try {
    jwt.verify(
      tokenValue,
      AUTH0_CLIENT_PUBLIC_KEY,
      options,
      (verifyError, decoded) => {
        if (verifyError) {
          // 401 Unauthorized
          console.log(3)
          return callback("Unauthorized c");
        }
        console.log('ok')
        return callback(
          null,
          {principalId: decoded.sub }
        );
      }
    );
  } catch (err) {
    console.log(4)
    return callback("Unauthorized d");
  }
};
