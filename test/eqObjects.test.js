const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

describe('* eqObjects', () => {
  it(`should return true when {a:1, b:2, c:3}, {b:2, c:3, a:1}`, () => {
    assert.strictEqual(eqObjects({a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1}), true);
  });
});
