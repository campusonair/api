const chai = require('chai');
const assert = chai.assert;
const _ = require('../src/room/create');

describe('Tests Embed API.', () => {
  it('Data should be returned', () => {
    _.handler({}, {}, (error, data) => {
      assert.deepEqual({} === data);
    });
  });
});
