const findKey = (object, cb) => {
  for ( const e in object) {
    if (cb(object[e])) {
      console.log(e);
      return e;
    } else {
      undefined;
    }
  }
};

module.exports = findKey;
