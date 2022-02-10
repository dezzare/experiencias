class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Pedro', 'Bittencourt')
const p2 = new Pessoa('Antonio', 'Bittencourt')
const p3 = new Pessoa('Joao', 'Laux')
const p4 = new Pessoa2('Francisco', 'Laux')

console.log(p1)
console.log(p2.sobrenome)
p3.comer()
p4.falar()
