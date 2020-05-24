const chai = require('chai');
const assert = chai.assert;
const _ = require('../src/room/create');

describe('Tests for create room.', () => {
  it('should fail.', () => {

    const token = 'wrongToken'
    const event = {
      body: `{"peerId":"Hello","idToken":"${token}"}`
    }

    _.handler(event, {}, (error, data) => {
      assert.deepEqual(400,data.statusCode)
      assert.deepEqual('Bad Request',data.body)
    });
  });
});
