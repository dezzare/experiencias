function showMessage(msg: any){
  return msg;
}

console.log(showMessage('Olá'));

//Não retorna valor, apenas executa a função
function semRetorno(...arg:string[]):void {
  console.log(arg.join(''));
};

semRetorno('A', 'B');