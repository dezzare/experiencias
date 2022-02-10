const produto = {
  nome: 'Caneca',
  preco: 2.5
};
const outroProduto = produto; //não copia
const maisUm = {
  ...produto
};
const caneca = Object.assign({}, produto);
const piorForma = {
  nome: produto.nome,
  preco: produto.preco
}

outroProduto.nome = 'Bola';
outroProduto.preco = 3;

console.log(produto);
console.log(outroProduto);
console.log(maisUm);

Object.freeze(maisUm); //property = configurable false
maisUm.preco = 10;
produto.preco = 10

//defineProperties defineProperty para definir propriedades
console.log(maisUm)
console.log(produto);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.getOwnPropertyDescriptor(maisUm, 'nome'))
