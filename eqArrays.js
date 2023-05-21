const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);// => false
