/*************************************/
/******* EJERCICIO 21 ****************/
/*************************************/

// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
];

let underAge = 'Usuarios menores de edad:';
let legalAge = 'Usuarios mayores de edad:';

for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    underAge += ' ' + users[i].name;
  } else {
    legalAge += ' ' + users[i].name;
  }
}

console.log(underAge);
console.log(legalAge);
