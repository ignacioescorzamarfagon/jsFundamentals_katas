/*************************************/
/******* EJERCICIO 10 ****************/
/*************************************/

//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let suma = 0;
  let numberOfItems = 0;
  param.forEach((element) => {
    suma += element;
    numberOfItems++;
  });
  return suma / numberOfItems;
}

console.log(average(numbers));
