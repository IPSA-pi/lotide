const assertEqual = function(actual, expected) {
  let assertion;
  actual === expected ? assertion = true : assertion = false;
  return assertion;
};

module.exports = assertEqual;


