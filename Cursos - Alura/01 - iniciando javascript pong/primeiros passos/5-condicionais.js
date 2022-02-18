//Trabalhando com condicionais

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const acompanhado = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 16;
if (idadeComprador >= 18 || acompanhado) {
    console.log("Boa viagem");
} else {
    console.log("Comprador menor de idade");
}

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);