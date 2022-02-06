// enum = estrutura de dados
// enum = Tipo
// enumera os valores

enum Cores {
  VERMELHO, // valor 0
  AZUL, // valor 1
  AMARELO, //valor 2
  PRETO = 100, //valor 100
  ROXO = 'ROXO', //valor roxo
  VERDE = 201, //precisa setar p/ voltar a contagem
  ROSA, // valor 202
}

//retorna 0
console.log(Cores.VERMELHO);

//retorna VERMELHO
console.log(Cores[0]);

//vai unir os dois enuns/classes
enum Cores {
  BRANCO = 203, //tem que inicializar o contador
  MARROM,
}

function escolheCor (cor:Cores): void{
  console.log(Cores[cor]);
}

escolheCor(Cores.ROXO);
escolheCor(12345) //retorna undefined
