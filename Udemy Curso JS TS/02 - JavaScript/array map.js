//map é similar filter
//map MAS pode alterar o original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// //funcionamento:
// numeros.map(function(valor, indice, array) {
//   console.log(valor, indice, array)
// })

//ex. dobrar os números
const dobra = numeros.map(x => x * 2);
// console.log(dobra)
// console.log(numeros)



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
    idade: 32
  },
  {
    nome: 'Wallace',
    idade: 47
  },
];

// const pessoaString = pessoas.map(x => x.nome).join(' ')
// console.log(pessoaString)

// const pessoaDelNome = pessoas.map(x => delete x.nome)
// console.log(pessoaDelNome)

const pessoaAddID = pessoas.map((x, id) => x.id = id+1)
console.log(pessoaAddID)
console.log(pessoas)