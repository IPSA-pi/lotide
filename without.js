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

const without = function(source, itemsToRemove) {
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];

    if (!itemsToRemove.includes(element)) {
      filtered.push(element);
    }
  }

  console.log(filtered);
  return filtered;
};

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
// eslint-disable-next-line max-len
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
