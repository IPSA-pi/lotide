const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const findKey = (object, cb) => {
  for ( const e in object) {
    if (cb(object[e])) {
      console.log(e);
      return e;
    } else {
      undefined;
    }
  }
};

const object = {
  'Blue Hill': {stars: 1},
  'Akaleri': {stars: 3},
  'noma': {stars: 2},
  'elBulli': {stars: 3},
  'Ora': {stars: 2},
  'Akelarre': {stars: 3},
};

assertEqual(findKey(object, (x) => x.stars === 2), 'noma');

