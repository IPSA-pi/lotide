const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe('* eqArrays', () => {
  it("should return true when [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false when ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  })
})