// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
}
console.log(objeto1)

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required
type PessoaRequired = Required<PessoaProtocol>;

//Partial
type PessoaPartial = Partial<PessoaRequired>;

//ReadOnly
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;


const objeto2: PessoaRequired = {
  nome: 'Pedro',
  sobrenome: 'Bittencourt',
  idade: 36,
}
console.log(objeto2);


// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; //retorna apenas AB
type TipoExtract = Extract<ABC, CDE>; //retorna apenas C
