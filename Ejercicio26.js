/*************************************/
/******* EJERCICIO 26 ****************/
/*************************************/

//Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].sellCount > 20) {
    goodProducts.push(products[i]);
  } else if (products[i].sellCount < 20) {
    badProducts.push(products[i]);
  }
}

console.log('');

console.log('Array goodProducts -->');
for (let i = 0; i < goodProducts.length; i++) {
  console.log(i + 1 + '.- ' + goodProducts[i].name);
}

console.log('');

console.log('Array badProducts -->');
for (let i = 0; i < badProducts.length; i++) {
  console.log(i + 1 + '.- ' + badProducts[i].name);
}

console.log('');
