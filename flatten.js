const flatten = function(arr) {
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line max-len
    !Array.isArray(arr[i]) ? flattened.push(arr[i]) : arr[i].map( (e) => flattened.push(e));
  }
  return flattened;
};

module.exports = flatten;
