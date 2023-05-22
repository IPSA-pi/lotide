const assertEqual = function(actual, expected) {
  const passed = `🍈🍈🍈 Assertion Passed: ${actual} === ${expected}`;
  const failed = `🎯🎯🎯 Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(passed) : console.log(failed);
};

const findKeyByValue = function(obj, value) {
  let result = '';
  for (const key in obj) {
    if (obj[key] === value) {
      result = key;
      console.log(result);
      return result;
    } else {
      result;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

const favoriteSongsInSpanish = {
  cristianCastro: 'No podrás',
  alaskaYDinarama: 'Ni tú ni nadie',
  hectorYTito: 'Yo te buscaba',
  antonioAguilar: 'Un puño de tierra',
  miguelYMiguel: 'Cruz de madera',
  metrikVader: 'Sin jale en mi crib',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue(favoriteSongsInSpanish, 'Yo te buscaba'), 'hectorYTito');
assertEqual(findKeyByValue(favoriteSongsInSpanish, 'Cruz de madera'), 'miguelYMiguel');
assertEqual(findKeyByValue(favoriteSongsInSpanish, 'Ni tú ni nadie'), 'alaskaYDinarama');
assertEqual(findKeyByValue(favoriteSongsInSpanish, 'Bandera negra'), undefined);


