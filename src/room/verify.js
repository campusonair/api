const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')

exports.verify = (token) => {
  const keyPath = path.join(path.dirname(path.dirname(__dirname)),'auth0.pub')
  const Auth0Pub = fs.readFileSync(keyPath,{encoding:'utf8'});
  try {
    const payload = jwt.verify(token,Auth0Pub)
    return payload
  } catch (error) {
    return error
  }
}
