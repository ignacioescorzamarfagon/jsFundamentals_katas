/*************************************/
/******* EJERCICIO 14 ****************/
/*************************************/

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let repeatParams = {};
  let repeats = 0;
  param.forEach((element1) => {
    param.forEach((element2) => {
      if (element1 == element2) {
        repeats++;
      }
    });
    repeatParams[element1] = repeats;
    repeats = 0;
  });

  return repeatParams;
}

console.log(repeatCounter(counterWords));
