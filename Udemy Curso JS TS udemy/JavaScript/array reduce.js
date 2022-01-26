//reduce pode fazer map(modifica) e filter(filtra)
//reduce == reduzir a um único elemento

//funcionamento = numeros.reduce(function(acumulador, valor, indice, array))
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//soma todos os números
const total = numeros.reduce((x, y) => x + y);
console.log(total)

//função de filter:
//NÂO FAZER
const pares = numeros.reduce((x, y) => {
  if (y % 2 === 0) {
    x.push(y)
  }
  return x
}, [])
console.log(pares)

//função de map
//NÃO FAZER
const dobro = numeros.reduce((x, y) => {
  x.push(y * 2);
  return x
}, [])
console.log(dobro)




const pessoas = [{
    nome: 'Luiz',
    idade: 62
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Eduardo',
    idade: 55
  },
  {
    nome: 'Letícia',
    idade: 19
  },
  {
    nome: 'Rosana',
    idade: 64
  },
  {
    nome: 'Wallace',
    idade: 47
  },
];

//retorna mais velha
const maisVelha = pessoas.reduce((x, y) => {
  if (x.idade > y.idade) {
    return x;
  } else {
    return y

  }

})
console.log(maisVelha);
