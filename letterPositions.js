const letterPositions = function(sentence) {
  const results = {};
  let fromIndex = 0;
  for (const l of sentence) {
    if (results[l]) {
      results[l].push(sentence.indexOf(l, fromIndex));
      fromIndex++;
    } else {
      results[l] = [sentence.indexOf(l)];
      fromIndex++;
    }
  }
  delete results[' '];
  console.log(results);
  return results;
};

module.exports = letterPositions;
