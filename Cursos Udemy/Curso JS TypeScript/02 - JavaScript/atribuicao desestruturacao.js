const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// ... rest operator ou spread operator
const [primeiroNumero, segundoNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero)
console.log(primeiroNumero, segundoNumero, ...resto)
const [n1, n2, , n4, , , , , , nx] = numeros
console.log(n1, n2, n4, nx)


const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Bittencourt',
  idade: 36,
  endereco: {
    rua: 'waldemar',
    numero: 000
  }
}

// /cria variavel nome com o nome do objeto
const {nome, sobrenome: teste} = pessoa; 
console.log(nome, teste);
const {endereco: {rua, numero}, endereco} = pessoa
console.log(rua, numero, endereco);
const {sobrenome, ...restante} = pessoa
console.log(sobrenome, restante)