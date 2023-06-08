const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

module.exports = assertEqual;


