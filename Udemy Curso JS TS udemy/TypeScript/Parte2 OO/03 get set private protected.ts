export class Pessoa {
  constructor (
    public nome: string,
    public sobrenome: string,
    private idade: number, //restrito a classe
    protected _cpf: string, //restrito a classe e "filhos"
  ) {}

  getIdade(): number {
    return this.idade;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf;
  }


  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

}

const pessoa = new Pessoa('Pedro', 'Bittencourt', 36, '123.456.789-00');
console.log(pessoa.getIdade);
pessoa.cpf = '111.222.333.45';
console.log(pessoa.cpf);

