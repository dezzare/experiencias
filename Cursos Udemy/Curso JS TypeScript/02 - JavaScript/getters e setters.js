function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque,
    writable: false, //permite ou nao alterar o valor
    configurable: false, //pode ou nao reconfigurar os itens
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number'){
        throw new TypeError('Insira somente números');
      }
      estoquePrivador = valor
    }
   
  });

}

const p2 = new Produto('Camiseta', 50, 3);
console.log(Object.keys(p2))
