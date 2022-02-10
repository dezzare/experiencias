//metodo ligado apenas a classe

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  //metodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }
  //metodo de instancia
  diminuiVolume() {
    this.volume -= 2;
  }

  //metodo estatico
  static trocaPilha() {
    console.log('Tocando a pilha de todos os controles')

  }
  static soma(a, b) {
    return console.log(a + b);
  }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1.volume)
controle1.diminuiVolume()
controle1.diminuiVolume()
console.log(controle1.volume)
console.log(controle1)

// controle1.trocaPilha();
ControleRemoto.trocaPilha();
ControleRemoto.soma(1, 2)
