class DispEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado');
      return;
    }
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já está desligado');
      return;
    }
    this.ligado = false;
  }

}


class Smatphone extends DispEletronico {
  constructor(nome, cor, modelo) {
    super(nome)

    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smatphone('Samsung', 'Preto', 'Gaçaxy s20');
console.log(s1)
s1.ligar()
s1.ligar()
s1.desligar()
s1.desligar()
