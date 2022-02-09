function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //substutuido por prototype
  //this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;

}

//Pesso.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.');


//new Object -> Objet.prototype
const ObjA = {
  chaveA: 'A'
  // __proto__: Object.prototype
}

const ObjB = {
  chaveB: 'B'
  // vai ser setado p/ __proto__> objA
}

Object.setPrototypeOf(objB, objA)



//Mais exemplo
function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;

}
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.acrescimo = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto1 = new Produto('Camiseta', 50);

console.log(produto1.acrescimo(100))

//Cria outro objeto e referencia proto
const produto2 = {
  nome: 'Caneca',
  preco: 20
}
Object.setPrototypeOf(produto2, Produto.prototype)
produto2.acrescimo(10)

//cria já setando o proto
const produto3 = Object.create(Produto.prototype);
produto3.preco = 10
produto3.acrescimo(10)