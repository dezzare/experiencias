// Função construtora = objetos = Pessoa (new)
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function(){
    console.log(this.nome + ' eu sou um método');
  };
}

// precisa sempre chamar new (cria obj vazio)
const p1 = new Pessoa('Luiz', 'Inácio');

p1.metodo();