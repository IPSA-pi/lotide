const countLetter = function(string) {
  string = string.split(' ').join('');
  const result = {};
  for (const l of string) {
    if (result[l]) {
      result[l] += 1;
    } else {
      result[l] = 1;
    }
  }
  return result;
};

module.exports = countLetter;
