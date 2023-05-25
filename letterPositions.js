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

const letterPositions = function(sentence) {
  const results = {};
  let fromIndex = 0;
  for (const l of sentence) {
    if (results[l]) {
      results[l].push(sentence.indexOf(l, fromIndex));
      fromIndex++;
    } else {
      results[l] = [sentence.indexOf(l)];
      fromIndex++;
    }
  }
  delete results[' '];
  console.log(results);
  return results;
};

// const string = 'hello';
// const expected = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4],
// };

const string2 = 'lighthouse in the house';
const expected2 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12],
};

assertArraysEqual(letterPositions(string2), expected2);
