/* eslint-disable max-len */
const findKeyByValue = function(obj, value) {
  let result = '';
  for (const key in obj) {
    if (obj[key] === value) {
      result = key;
      console.log(result);
      return result;
    } else {
      result;
    }
  }
};

module.exports = findKeyByValue;
