/*************************************/
/******* EJERCICIO 23 ****************/
/*************************************/

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];

let smallFilm = [];
let mediumFilm = [];
let largeFilm = [];
movies.forEach((element) => {
  if (element.durationInMinutes < 100) {
    smallFilm.push(element.name);
  } else if (element.durationInMinutes > 200) {
    largeFilm.push(element.name);
  } else {
    mediumFilm.push(element.name);
  }
});

console.log('Películas pequeñas ' + smallFilm);
console.log('Películas medianas ' + mediumFilm);
console.log('Películas grandes ' + largeFilm);
