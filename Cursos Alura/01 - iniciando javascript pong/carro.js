//Códigos do Carro

let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [400, 600, 600, 300, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2, 4, 5, 3];


function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function resetCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 660;
        }
    }
}

function passouTodaTela(xCarro) {
    return xCarro < -60;
}