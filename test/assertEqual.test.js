const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('* assertEqual', () => {
  it('should return true when passed (1, 1)', () => {
    assert.strictEqual(assertEqual(1,1), true);
  })
})

assertEqual(1, 1);
assertEqual('a', 'a');
assertEqual(1, 1);