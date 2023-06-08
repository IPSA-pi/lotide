const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  let assertion;
  actual === expected ? assertion = true : assertion = false;
  return assertion;
  
};

module.exports = assertEqual;


