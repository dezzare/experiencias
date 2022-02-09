// const data = new Date(0) // Marco Zero = 01/01/1970 Timestamp unix
// console.log (data.toString());


// const data = new Date(2021, 3, 20, 15, 14) //A, M, D, h:min:seg
const data = new Date('2021-04-20 20:20:59')
console.log(data);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa a contagem em 0, colocar +1
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(Date.now())
console.log(Date(1641340723856)); //em milissegundos a partir marco 0

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataNova = new Date();
const dataBrasil = formataData(dataNova);
console.log(dataBrasil);
