const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!object2.hasOwnProperty(key) || !isEqual(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
};

const isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return isArrayEqual(value1, value2);
  }

  return value1 === value2;
};

const isArrayEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!isEqual(array1[i], array2[i])) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log(eqObjects({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(eqObjects({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(eqObjects({ a: { x: 1, y: 2 }, b: 2 }, { a: { x: 1, y: 2 }, b: 2 })); // true
console.log(eqObjects({ a: { x: 1, y: 2 }, b: 2 }, { a: { x: 1, y: 2 }, b: 3 })); // false
console.log(eqObjects({ a: [1, 2, 3], b: 2 }, { a: [1, 2, 3], b: 2 })); // true
console.log(eqObjects({ a: [1, 2, 3], b: 2 }, { a: [1, 2, 3], b: 2 })); // false
