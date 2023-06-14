const without = function(source, itemsToRemove) {
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];

    if (!itemsToRemove.includes(element)) {
      filtered.push(element);
    }
  }
  return filtered;
};

module.exports = without;
