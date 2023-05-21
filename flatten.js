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

const flatten = function(arr) {
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line max-len
    !Array.isArray(arr[i]) ? flattened.push(arr[i]) : arr[i].map( (e) => flattened.push(e));
  }
  console.log(flattened);
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
