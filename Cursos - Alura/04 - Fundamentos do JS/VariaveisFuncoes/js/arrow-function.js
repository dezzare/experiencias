// Novidade do ES6

function apresentar(nome) {
  return `meu nome é ${nome}`;
}

console.log(apresentar('Pedro'));

const apresentarArrow = (nome) => `meu nome é ${nome}`;
apresentarArrow('Pedrão');

console.log(apresentarArrow('Pedrao'));

const somaNumeros = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    console.log(num1, num2);
    return 'somente números de 0 a 9';
  }
  return num1 + num2;
};

console.log(somaNumeros(2, 1));
