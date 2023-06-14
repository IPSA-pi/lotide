const middle = function(arr) {
  let middle = [];
  let middleIndex = 0;
  if (arr.length <= 2) {
    middle = [];
  } else if (arr.length % 2 === 0) {
    middleIndex = (arr.length / 2) - 1;
    middle.push(arr[middleIndex], arr[middleIndex + 1]);
  } else if (arr.length % 2 !== 0) {
    middleIndex = Math.floor(arr.length / 2);
    middle.push(arr[middleIndex]);
  }
  return middle;
};

module.exports = middle;
