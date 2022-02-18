// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true


//********* 
//Primeira tentativa: só não funciona com 1, não consegui achar o pq;
//********* 

// function truthCheck(collection, pre) {
//   let check = true;
//   let i = 0;

//   while (i < collection.length) {

//     if (!collection[i].hasOwnProperty(pre) || collection[i][pre] == 0 || collection[i][pre] == null || collection[i][pre].toString == 'NaN') {
//       check = false;
//     }
//     i++
//   };

//   return check;
// }

// console.log(truthCheck(truthCheck([{
//   "single": "double"
// }, {
//   "single": NaN
// }], "single")))


//********* 
//Segunda Tentativa
//********* 

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre])
      return false;
  }
  return true;
}

console.log(truthCheck(truthCheck([{
  "single": "double"
}, {
  "single": NaN
}], "single")))
