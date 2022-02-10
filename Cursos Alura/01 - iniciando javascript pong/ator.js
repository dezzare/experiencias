//Códigos do Ator


let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let mortes = 0;


function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (podeSeMover) {
        if (keyIsDown(UP_ARROW)) {
            yAtor -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            yAtor += 3;
        }
        if (keyIsDown(LEFT_ARROW)) {
            xAtor -= 3
        }
        if (keyIsDown(RIGHT_ARROW)) {
            xAtor += 3
        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15)
        if (colisao) {
            resetAtor();
            mortes += 1;
            somDaColisao.play();
        }
    }
}

function resetAtor() {
    xAtor = 100;
    yAtor = 366;
}

function mostraPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 245, 60));
    text(meusPontos, width / 5, 27);
    text(mortes, 3 * width / 5, 27);
}

function marcaPontos() {
    if (yAtor < 15) {
        meusPontos += 1;
        resetAtor();
        somPontos.play();
    }
}

function podeSeMover() {
    return yAtor > 366;
}