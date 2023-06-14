/* eslint-disable max-len */
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

module.exports = eqObjects;
