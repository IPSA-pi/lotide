
const assertEqual = function(actual, expected) {
  const passed = `👶🏾⚽️🎅🏿 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯💿🍈 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('a', 'a');
// assertEqual('a', 'b');
assertEqual(1, 1);


