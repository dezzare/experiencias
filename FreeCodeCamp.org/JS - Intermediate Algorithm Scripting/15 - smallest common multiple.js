// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple


function smallestCommons(arr) {

  let newArr = []
  let menor;
  let maior;


  //verifica menor/maior
  if (arr[0] > arr[1]) {
    menor = arr[1]
    maior = arr[0]
  } else {
    menor = arr[0]
    maior = arr[1]
  }

  //cria array do intervalo menor/maior
  for (let i = menor; i <= maior; i++) {
    newArr.push(i)
  }


  //mmc = (a.b)/mdc(a,b)
  //maior divisor comum
  let mdc = (a, b) => (b === 0) ? a : mdc(b, a % b);

  // minimo múltiplo comum
  let mmc = (a, b) => a * b / mdc(a, b);

  // reduce(function(acumulador, valor) => mmc(a, b))
  return newArr.reduce((multiplo, num) => mmc(multiplo, num));

}

console.log(smallestCommons([1, 5]));
