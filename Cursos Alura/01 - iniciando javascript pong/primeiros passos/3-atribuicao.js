//Atribuição de Variáveis
const idade = 36;
const nome = "Pedro";
const sobrenome = "de Mesquita Bittencourt";
var nomeVar = "Pedro";
let nomeVarLet = "Pedro";
var sobrenomeVar = "de Mesquita Bittencourt";
let nomeLet = "Pedro";
var nomeLetVar = "Pedro";
let sobrenomeLet = "de Mesquita Bittencourt";


console.log(nome, sobrenome);
console.log(nome + sobrenome); //não vai ter espaço Pedrode Mesquita
console.log(nome + " " + sobrenome);
console.log(`Meu nome é ${nome}`); //usar crase
//console.log("Meu nome é ${nome}"); não funciona

//const nome = nome + sobrenome; //vai dar erro
var nomeVar = nomeVar + " " + sobrenomeVar;
nomeLet = nomeLet + sobrenomeLet; //só assim p/ funcionar no let
//var nomeVarLet = nomeVarLet + sobrenomeVar; //erro
//let nomeLetVar = nomeLetVar + sobrenomeLet; //erro

console.log(nomeVar);
console.log(nomeLet);
console.log(nomeLetVar);
console.log(nomeVarLet);


// let ano = 2021;
// const anoNascimento = 1985;
// let idadeAtual = ano - anoNascimento;

// console.log("Sua idade é:", idadeAtual);

// ano = 2022

// console.log("Sua idade é:", idadeAtual);

// idadeAtual = ano - anoNascimento;
// console.log("Sua idade é:", idadeAtual);

var ano = 2021;
const anoNascimento = 1985;
var idadeAtual = ano - anoNascimento;

console.log("Sua idade é:", idadeAtual);

var ano = 2022

console.log("Sua idade é:", idadeAtual);

var idadeAtual = ano - anoNascimento;
console.log("Sua idade é:", idadeAtual);