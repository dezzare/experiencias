@decorator
export class Animal {
  constructor(public nome: string, public cor: string){}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]){
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.invesrte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Pedro', 'roxo');
console.log(animal);
