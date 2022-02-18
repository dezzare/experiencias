//trabalhando com loops

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = `Curitiba`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino Existe");
        destinoExiste = true
        break;
    }
    contador += 1;
}

console.log("Embarque: \n")
if (podeComprar && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}