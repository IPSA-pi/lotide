const flatten = function(arr) {
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line max-len
    !Array.isArray(arr[i]) ? flattened.push(arr[i]) : arr[i].map( (e) => flattened.push(e));
  }
  return flattened;
};

const middle = function(arr) {
  let middle = [];
  let middleIndexStart = 0;
  if (arr.length <= 2) {
    middle = [];
  } else if (arr.length % 2 === 0) {
    middleIndexStart = (arr.length / 2) - 1;
    middle.push(arr.slice(middleIndexStart, middleIndexStart + 2));
  } else if (arr.length % 2 !== 0) {
    middleIndexStart = Math.floor(arr.length / 2);
    middle.push(arr[middleIndexStart]);
  }
  return flatten(middle);
};

module.exports = middle;