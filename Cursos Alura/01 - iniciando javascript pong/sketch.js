
function setup() {
    createCanvas(500, 400);
    // somDaTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarro();
    movimentaCarro();
    resetCarros();
    verificaColisao();
    mostraPontos();
    marcaPontos();
    podeSeMover();
}

