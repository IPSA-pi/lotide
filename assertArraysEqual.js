const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let assertion = '';
  eqArrays(arr1, arr2) ? assertion = true : assertion = false;
  return assertion;
};

module.exports = assertArraysEqual;
