//JS é case Sensitive

const idade = 30;
const nome = "Pedro";

//não fazer
// const Sobrenome = "Mesquita";
// sobrenome = "Bittencourt";


//Conversão de tipos
// simbolo + concatena
console.log("Conversão de tipos");
const idadeReal = "36";
const ano = 2021;
console.log("Variável ano VIRGULA", ano); //Dá um espaço
//console.log("Variavel ano ESPAÇO" ano); = ERRO
console.log("Variavel ano + " + ano); //Não dá espaço, cola
console.log(10 + ano);
console.log(10, ano);

//parseInt converte para Inteiro
console.log(parseInt(idadeReal) + 2);

console.log(parseFloat("10.5") + 2);

//outros simbolos / * 
console.log("10" / "2") //js converte para int automaticamente
console.log("Pedro" / "2") //NaN Not a Number
console.log("10" * "2"); //converte automaticamente
console.log("11" / "2"); //converte para float