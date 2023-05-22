const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const countLetter = function(string) {
  string = string.split(' ').join('');
  let result = {};
  for (const l of string) {
    if (result[l]) {
      result[l] += 1;
    } else {
      result[l] = 1;
    }
  }
  return result;
};


const string = "lighthouse in the house";
const obj = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

let result = countLetter(string)
assertEqual(result['g'], obj['g']);
assertEqual(result['n'], obj['n']);
assertEqual(result['h'], obj['h']);

