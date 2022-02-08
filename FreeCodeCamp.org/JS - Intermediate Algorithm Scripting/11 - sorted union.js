// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

//********** Primeira tentativa

function uniteUnique(...arr) {
  let i = 0;
  let newArr = [...arr];
  let retorno = []
  let outro = []
  while (i < newArr.length) {
    retorno.push(...newArr[i])
    i++
  };

  //travei aqui e não consegui evoluir
  retorno.reduce((x, y) => {
    if (outro.includes(y)) {
      console.log("oi")
    } else {
      outro.push(y)

    };
    return outro
  })
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//********** Segunda tentativa:
function uniteUnique(...arr) {
  let newArr = [...arr];
  let retorno = [];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (!retorno.includes(newArr[i][j])) {
        retorno.push(newArr[i][j]);
      }
    }
  }
  return retorno;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
