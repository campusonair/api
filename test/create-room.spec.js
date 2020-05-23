const chai = require('chai');
const assert = chai.assert;
const _ = require('../src/room/create');

describe('Tests Embed API.', () => {
  it('Data should be returned', () => {
    const event = {
      body: '{"peerId":"Hello","idToken":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRwZ2RRV3N2YlJzaDBaWTltNDFkViJ9.eyJuaWNrbmFtZSI6Im4uZ2xvYmUudXMiLCJuYW1lIjoibi5nbG9iZS51c0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvOGY3ZjZhMDk3MzIxY2UyMjg0ZTljOWJlMTI0ZjUzMGI_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZuLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIwLTA1LTIzVDA2OjA4OjA1LjM5MVoiLCJlbWFpbCI6Im4uZ2xvYmUudXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2FtcHVzb25haXIuYXV0aDAuY29tLyIsInN1YiI6ImVtYWlsfDVlYzBmNTIzNTgwYTFkOWFmNGU3YTU2NCIsImF1ZCI6IlNjU09qSDBMalZOOURHa2d1bG9FVlVSVWZkSkNxOXUyIiwiaWF0IjoxNTkwMjE0MjMxLCJleHAiOjE1OTAyNTAyMzEsIm5vbmNlIjoiUms4MFp6WXlTV05oU0hSdlh6ZDVlRmR3UTFCSVdXcGhTMDl3YWtOVGNuWkRXVUp3VDNKVFpVZFhXZz09In0.rq746DIFV-NLkDZAPpjbU6GoTt9yV5IjJlLfiwrtzF2z4pH-y8QwWjImNymZED33wxxL2eo7_PiOG8xg9k7blbdEu00HGR1M_CMe2o-Nc9jqmm2DoyJ-eXgYySkEypoUYhNTIFlXO6bwSstBLkyX7WvKW4qUwQJxFo2AOpu9lnVd6gHc2rSYHClMp6eDnJn4S1l-yX4yWL5hTlS_k5sRjuk61M8WAMOYFv60fRrxqzo5WKBKBTeXqVkKjqJEj_u4FEQpHYC1GBrttZD9BhSsLR846iStzE850KuLUUfRCncWtg9NmRH_nzmXA78ATlJ2MaZSycQxs2FhMgoVqZtDNw"}'
    }
    _.handler(event, {}, (error, data) => {
      assert.deepEqual({'peerId':'Hello','idToken':'World'}, JSON.parse(data.body));
      assert.isTrue({'peerId':'Hello','idToken':'World'} === JSON.parse(data.body));
    });
  });
});
