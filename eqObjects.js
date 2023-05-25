const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const comparrisons = [];
  for (const key in object2) {
    if (object1[key] !== object2[key]) {
      comparrisons.push(false);
    } else {
      comparrisons.push(true);
    }
  };

  if (!comparrisons.includes(false)) {
    return true;
  } else {
    return false;
  }
};

// const shirtObject = {color: 'red', size: 'medium'};
// const anotherShirtObject = {size: 'medium', color: 'red'};
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// eslint-disable-next-line max-len
// const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
// eslint-disable-next-line max-len
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
