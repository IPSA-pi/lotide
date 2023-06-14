/* eslint-disable max-len */

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  const passed = `✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`;
  const failed = `🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;
  eqObjects(obj1, obj2) ? console.log(passed) : console.log(failed);
};

const obj = {firstName: 'Ian', lastName: 'Sebelius'};
const obj3 = {firstName: 'Ian', lastName: 'Sebelius'};
const obj2 = {firstName: 'Paul', lastName: 'Ancira'};

assertObjectsEqual(obj, obj); // true
assertObjectsEqual(obj, obj3);// ture
assertObjectsEqual(obj, obj2);// false
assertObjectsEqual({}, {}); //   true
