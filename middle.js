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
  return flattened;
};

const middle = function(arr) {
  let middle = [];
  let middleIndexStart = 0;
  if (arr.length <= 2) {
    middle = [];
  } else if (arr.length % 2 === 0) {
    middleIndexStart = (arr.length / 2) - 1;
    middle.push(arr.slice(middleIndexStart, middleIndexStart + 2));
  } else if (arr.length % 2 !== 0) {
    middleIndexStart = Math.floor(arr.length / 2);
    middle.push(arr[middleIndexStart]);
  }
  return flatten(middle);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
