const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const passed = `🍈🍈🍈 Assertion Passed, arrays are identical`;
  const failed = `🎯🎯🎯 Assertion Failed`;
  // eslint-disable-next-line max-len
  let assertion = '';
  eqArrays(arr1, arr2) ? assertion = true : assertion = false;
  return assertion;
};

module.exports = assertArraysEqual;
