// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  let resultado = 0;
  let numeroAnterior = 0;
  let numeroAtual = 1;

  while (numeroAtual <= num) {

    if (numeroAtual % 2 !== 0) {
      resultado += numeroAtual;
    };

    numeroAtual += numeroAnterior;
    numeroAnterior = numeroAtual - numeroAnterior;

  };

  return resultado;
};

console.log(sumFibs(1000)) //deve retornar 1785
console.log(sumFibs(75024)) //deve retornar 60696
