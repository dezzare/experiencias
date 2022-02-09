//experimental options
//decorators = sào funções que se tornam um 'objeto impostor'


type Constructor = new (...args: any[]) => any;

// classes
function decoradorDeClasse(construtor: Constructor): any {
  console.log('CLASSE');
  console.log(construtor);
  console.log('###');

  // retorno pode ser omitido
  return class extends construtor {
  };
}

// método de instância
function decoradorDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {

  // chamado na criação do método (não precisa chamar )
  console.log('MÉTODO NORMAL');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);

  // retorno pode ser omitido
  return {
    // value altera return original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// método estático
function decoradorDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {

  // chamado criação
  console.log('MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');

  // pode ser omitido
  return {
    // get/set OU value
    enumerable: true,
    configurable: true,
  };
}

function decoradorDeParametroDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {

  console.log('PARÂMETRO DE MÉTODO');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');

}

// parâmetro de método estático
function decoradorDeParametroDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {

  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');

}

// propriedade
function decoradorDePropriedade(
  prototipoDaClasse: any,
  nomePropriedade: string,
): any {

  console.log('DECORADOR DE PROPRIEDADE');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log('###');

  // get e set p manipular o valor da propriedade
  let valorPropriedade: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

// propriedade estática
function decoradorDePropriedadeEstatica(
  classConstructor: any,
  nomePropriedade: string,
): any {

  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log('###');

  return {
    enumerable: true,
    configurable: true,
  };
}

// getter/setter
function decoradorDeGetterESetterNormal(
  prototipoDaClasse: any,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {

  // só pode ser aplicado no getter OU setter
  console.log('GETTER/SETTER normal');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');

  return {

    enumerable: true,
    configurable: true,
  };
}

// getter/setter estático
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {

  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');

  return {

    enumerable: true,
    configurable: true,
  };
}


// classe e decorators
@decoradorDeClasse
export class UmaPessoa {
  @decoradorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoradorDePropriedadeEstatica
  static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoradorDeMetodo
  metodo(@decoradorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoradorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + ' - ' + msg;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  @decoradorDeGetterESetterNormal
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}

// Uso da classe

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
pessoa.nomeCompleto = 'João Silva Oliveira';
const metodo = pessoa.metodo('Olá mundo!');
const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(UmaPessoa.propriedadeEstatica);
