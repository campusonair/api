const chai = require('chai');
const assert = chai.assert;
const _ = require('../src/room/create');

describe('Tests Embed API.', () => {
  it('Data should be returned', () => {
    const event = {
      body: '{"peerId":"Hello","idToken":"World"}'
    }
    _.handler(event, {}, (error, data) => {
      assert.deepEqual({'peerId':'Hello','idToken':'World'}, JSON.parse(data.body));
      assert.isTrue({'peerId':'Hello','idToken':'World'} === JSON.parse(data.body));
    });
  });
});
