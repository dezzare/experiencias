function showMessage(msg: any){
  return msg;
}

console.log(showMessage('Olá'));

//Não retorna valor, apenas executa a função
function semRetorno(...arg:string[]):void {
  console.log(arg.join(''));
};

semRetorno('A', 'B');


//Objetos
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor A';
// não consegue criar novas "chaves"
// objetoA.chaveC = "Nova chave";

const objetoB: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //permite criar novas 'chaves'
} = { 
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoB.chaveA = 'Outro valor';
objetoB.chaveC = 'nova chave';
objetoB.chaveD = 'Valor D'