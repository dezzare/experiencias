function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;


  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque,
    writable: false, //permite ou nao alterar o valor
    configurable: false //pode ou nao reconfigurar os itens
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    },

  })

}

const p2 = new Produto('Camiseta', 50, 3);
console.log(Object.keys(p2))
