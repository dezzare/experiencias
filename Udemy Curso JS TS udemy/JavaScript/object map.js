// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [{
    id: 3,
    nome: 'Luiz'
  },
  {
    id: 1,
    nome: 'Maria'
  },
  {
    id: 2,
    nome: 'Helena'
  },

];


//problema que reordena em numero crescente
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const {
//     id
//   } = pessoa;
//   novasPessoas[id] = {
//     ...pessoa
//   };
// }
// console.log(novasPessoas)
// retorna:
// {  '1': {    id: 1,    nome: 'Helena'  },
//   '2': {    id: 2,    nome: 'Maria'  },
//   '3': {    id: 3,    nome: 'Luiz'  }
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const {
    id
  } = pessoa;
  novasPessoas.set(id, {
    ...pessoa
  });
}
console.log(novasPessoas.get(3)) //get id 3

for (const [identifier, {
    id,
    nome
  }] of novasPessoas) {
  console.log(identifier, id, nome);
}
