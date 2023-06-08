const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;
const result = tail(['Hello', 'Lighthouse', 'Labs']);

describe('* tail', () => {
  it("the returned array should have the same length as arr.length - 1", () => {
    assert.strictEqual(result.length, 2);
  });
})


// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');