function soma(num1, num2) {
  return num1 + num2;
}

const numerosSomados = soma(2, 2);
console.log(numerosSomados);

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade(36, 'Pedro'));

function multiplica(num1, num2) {
  return num1 * num2;
}
// soma os números 4+5 e 3+3 e multiplica os resultados
console.log(multiplica(soma(4, 5), soma(3, 3)));
