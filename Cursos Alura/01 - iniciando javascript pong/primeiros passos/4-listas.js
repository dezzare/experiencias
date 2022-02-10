//Trabalhando com listas

//não é prático, imagina quantas vezes declarar p/ uma agencia de viagem
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log("Destinos possíveis:")
console.log(salvador, saoPaulo, rioDeJaneiro);

//Listas são chamadas de Array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`) //adiciona nome na lista, altera a lista e não a constante
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //retira são paulo
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //imprime rio de janeiro, pq sp foi removido
