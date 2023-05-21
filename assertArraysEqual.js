const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const passed = `🍈🍈🍈 Assertion Passed, arrays are identical`;
  const failed = `🎯🎯🎯 Assertion Failed`;
  // eslint-disable-next-line max-len
  eqArrays(arr1, arr2) ? console.log(passed) : console.log(failed);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
