// Funções e VAR são lidas antecipadamente
// const e let não
// Hoisting

const soma = function(num1, num2) {
  return num1 + num2;
};
console.log(soma(1, 1));

console.log(apresentar());

function apresentar() {
  return 'olá';
}
