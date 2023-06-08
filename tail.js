const tail = function(arr) {
  let result;
  arr.length === 1 || arr.length === 0 ?
    result = [] :
      result = arr.slice(1);
  return result;
};

module.exports = tail;
