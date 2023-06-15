const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe('* middle', () => {
  it("should return an empty array when passed a single element array", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []), true);
  });
  it("should return 1 value when array.length is odd", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true);
  });
})
;
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);