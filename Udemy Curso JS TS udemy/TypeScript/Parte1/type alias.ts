//Type Alias
//
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa1: Pessoa = {
nome: 'Pedro',
idade: 36,
salario: 200_000, // 200k facilita leitura
};

export function setCor(pessoa: Pessoa, cor: CorPreferida): Pessoa {
 return { ...pessoa, corPreferida: cor };
}

console.log(setCor(pessoa1, 'Vermelho'));
console.log(pessoa1);
