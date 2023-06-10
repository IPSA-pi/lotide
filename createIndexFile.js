const lotide = '.';
const fs = require('fs');
const re = `^[^.].*\.js$`;

// Print out const declarations requiring each function
const fNamesArr = [];
fs.readdir(lotide, (err, files) => {
  files.forEach((file) => {
    file.match(re) ? fNamesArr.push(file) : '';
  });
  console.log(
      fNamesArr.forEach((name) => {
        const noJs = name.replace('.js', '');
        console.log(`const ${noJs} = require('./${noJs}');`);
      }),
      console.log(),
      console.log('module.exports = {'),
      fNamesArr.forEach((name) => {
        const noJs = name.replace('.js', '');
        console.log(`${noJs},`);
      }),
      console.log('};'),
  );
});
