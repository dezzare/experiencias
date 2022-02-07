export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-99';


  constructor (
    public nome: string,
    public sobrenome: string,
    public idade: number, //restrito a classe
    public cpf: string, //restrito a classe e "filhos"
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao );
  }
}

const pessoa = Pessoa.criaPessoa('Pedro', 'Bittencourt');
