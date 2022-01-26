//filter - sempre retorna um array mesma quantidade ou menos
// filter NÃO modifica o original!
// envia p/ função: valorContidoNoÍndice, indiceDoValor, valorArrayCompleto

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//ex. filtra números maiores do que 10
let maior = numeros.filter(x => x>10);
//forma de funcionamento:
// function callbackFilter(valorContidoNoÍndice, indiceDoValor, valorArrayCompleto){
  // if(valorContidoNoÍndice > 10){
  //   return true;
  // } else {
  //   return false;
  // } 
  //é substituido por: 
//   return valorContidoNoÍndice > 10
// }

//outra forma de escrever:
// const numFiltrados = numeros.filter(function(valor){
//   return valor > 10;       ou.filter((valor) => {})
// })



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

const pessoasNomesGrandes= pessoas.filter(x => x.nome.length >= 5);
const pessoasCinquenta = pessoas.filter(x => x.idade >= 50);
const pessoasTerminaA = pessoas.filter(x => x.nome.toLowerCase().endsWith('a'));

console.log(pessoasTerminaA);