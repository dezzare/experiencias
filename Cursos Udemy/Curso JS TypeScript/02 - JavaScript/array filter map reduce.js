// uso em conjunto

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//retorna a soma do dobro de todos os pares.

const pares = numeros
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reduce((x, y) => x + y);

console.log(pares)
