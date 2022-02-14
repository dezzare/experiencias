//Imagens e Sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;

//Sons
let somDaTrilha;
let somDaColisao;
let somPontos;


function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro1 = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDaTrilha = loadSound("sons/trilha.mp3");
    somPontos = loadSound("sons/pontos.wav");

}