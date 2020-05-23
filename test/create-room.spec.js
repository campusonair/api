const chai = require('chai');
const assert = chai.assert;
const _ = require('../src/room/create');
const jwt = require('jsonwebtoken');


describe('Tests Embed API.', () => {
  it('Data should be returned', () => {

    const expired = Date.now() + 1000
    const rawJWT = {
      'nickname': 'Jhon',
      'name': 'info@example.com',
      'picture': 'https://example.com/example.png',
      'updated_at': '2020-05-23T06:08:05.391Z',
      'email': 'info@example.com',
      'email_verified': true,
      'iss': 'https://campusonair.auth0.com/',
      'sub': 'email|5ec0f523580a1d9af4e7a564',
      'aud': 'ScSOjH0LjVN9DGkguloEVURUfdJCq9u2',
      'iat': 1590214231,
      'exp': expired,
      'nonce': 'Rk80ZzYySWNhSHRvXzd5eFdwQ1BIWWphS09wakNTcnZDWUJwT3JTZUdXWg=='
    }

    const token = jwt.sign(rawJWT, 'aiueo');
    const event = {
      body: `{"peerId":"Hello","idToken":"${token}"}`
    }

    _.handler(event, {}, (error, data) => {
      assert.deepEqual({'peerId':'Hello','idToken': token}, JSON.parse(data.body));
    });
  });
});
