const takeUntil = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(callback(array[i]));
    if (callback(array[i])) {
      return result;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = takeUntil;
