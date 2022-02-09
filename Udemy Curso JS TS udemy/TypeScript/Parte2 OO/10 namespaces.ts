//ES6 tem sistema de módulos
//mas TS tem suporte a namespace

namespace MeuNameSpace {
  console.log('teste');
};

namespace PessoaDoNS {
  const nome = 'Pedro';

  export class ClasseDaPessoa {
    constructor (public nome: string) {}
  }

  const pessoa = new ClasseDaPessoa('Pedro');
  console.log(pessoa);
}

//scope diferente
const pessoaDeClasse = new PessoaDoNS.ClasseDaPessoa('Pedrão');
console.log(pessoaDeClasse);
