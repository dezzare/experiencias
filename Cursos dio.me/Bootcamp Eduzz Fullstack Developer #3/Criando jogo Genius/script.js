let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const genius = document.querySelector('.genius');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const playButton = document.querySelector('.btn-play');
let stopGame = true;

// Cria uma ordem aleatória de cores.
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1 );
  }
}

// Acende a cor seguinte;
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() =>{
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  }, number);
}

// Compara os botões apertados com a ordem correta
let checkOrder = () => {
  for (let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
     break;
    }
  }
  if(clickedOrder.length == order.length && stopGame===false) {
    alert(`Você acertou!!!`);
    nextLevel();
  }
}

// Função para o clique do usuário
let click = (color) => {
  if(stopGame === false ){
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
      createColorElement(color).classList.remove('selected');
      checkOrder();
    }, 250)
  }
}


// Função que rotorna a cor
let createColorElement = (color) => {
  if(color == 0){
    return green;
  } else if (color == 1){
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3){
    return blue;
  }
}

// Função para o próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}


// Função para o fim do jogo
let gameOver = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!
    Clique em OK para iniciar um novo jogo`)

  order = [];
  clickedOrder = [];
  stopGame = true;

  //playGame();
}

let playGame = () => {
  alert('Bem vindo ao Gênesis! \nIniciando um novo jogo!');
  score = 0;
  stopGame = false;
  shuffleOrder();
// nexLevel() começa o jogo com 1 ponto;
}

//green.addEventListener('click', click(0));
//red.addEventListener('click', click(1));
//yellow.addEventListener('click', click(2));
//blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playButton.onclick = () => playGame();
