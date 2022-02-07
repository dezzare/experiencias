//Criar clase:
//  class Classe {}
//  maioria das vezes usa o export

export class Empresa {
//publico / não pode alterar / atributo / tipo
  public readonly nome: string; //public é redundante
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador);
  }
  mostraColaboradores(): void{
    for(const colaborad of this.colaboradores){
      console.log(colaborad);
    }
  }

}

export class Colaborador {
  constructor(public readonly nome:string, public readonly sobrenome: string){}
}

const empresa1 = new Empresa('Udemy', '11.222.333/0001-44');
console.log(empresa1);
//empresa1.nome = "Youtube"; não é possível(readonly)
console.log(empresa1.nome);

const colaborador1 = new Colaborador('Pedro', 'Bittencourt');
const colaborador2 = new Colaborador('Maria', 'Silva');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.mostraColaboradores();
