const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

let result;

const tail = function(arr) {
  arr.length === 1 || arr.length === 0 ?
    result = [] :
      result = arr.slice(1);
  return result;
};

// eslint-disable-next-line max-len
assertEqual(tail(['Hello', 'Lighthouse', 'Labs']).join(''), ['Lighthouse', 'Labs'].join(''));
assertEqual(tail([]).join(), [].join());
