/*************************************/
/******* EJERCICIO 4 *****************/
/*************************************/

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
//const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
avenger = avengers[0];
console.log('Respuesta ejercicio 1.1 --> ' + avenger);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
avengers.splice(0, 1, 'IRONMAN');
console.log('Respuesta ejercicio 1.2 --> ' + avengers);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let elements = avengers.length;
console.log('Respuesta ejercicio 1.3 --> ' + elements);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(
  'Respuesta ejercicio 1.4 --> ' +
    rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];

rickAndMortyCharacters1.pop();
console.log('/********** RESPUESTA EJERCICIO 1.5 ***********/');
console.log('Primer elemento del array --> ' + rickAndMortyCharacters1[0]);
console.log(
  'Último elemento del array --> ' +
    rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]
);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];

rickAndMortyCharacters2.splice(1, 1);
console.log('Respuesta ejercicio 1.4 --> ' + rickAndMortyCharacters2);
