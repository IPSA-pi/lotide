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

  for (const key of object1Keys) {
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
