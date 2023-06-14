const middle = function(arr) {
  let middle = [];
  let middleIndexStart = 0;
  if (arr.length <= 2) {
    middle = [];
  } else if (arr.length % 2 === 0) {
    middleIndexStart = (arr.length / 2) - 1;
    middle.push(arr[middleIndexStart], arr[middleIndexStart + 1]);
  } else if (arr.length % 2 !== 0) {
    middleIndexStart = Math.floor(arr.length / 2);
    middle.push(arr[middleIndexStart]);
  }
  return middle;
};

module.exports = middle;
