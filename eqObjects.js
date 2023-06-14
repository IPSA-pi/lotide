/* eslint-disable max-len */
const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // Get each object's keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // check if both objects have the same .length
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // Loop over every key and return false is object1's key value isn't the same as object2's key value
  for (const key of object1Keys) {
    // check if the value of a key is an Array in both objects, if they both are arrays run function to verify if they are equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if everything matched return true
  return true;
};

// const shirtObject = {color: 'red', size: 'medium'};
// const anotherShirtObject = {size: 'medium', color: 'red'};
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// // eslint-disable-next-line max-len
// const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

