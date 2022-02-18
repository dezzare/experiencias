// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes


// Primeira tentativa
// function sumPrimes(num) {
//   let arr = [2];

//   for (let i = 3; i < num; i++) {
//     let primo = 0;
//     let controle = 0;
//     for (let j = 0; j < i; j++) {
//       if (i % j === 0 && i % 2 != 0) {
//         primo++;
//         arr.push(i)
//         controle++;
//       }

//       //retira numeros repetidos do array
//       if (controle != 1 && arr.slice(-1) == i) {
//         arr.pop()
//       }
//     }

//     if (primo > 0 && controle == 1) {
//       soma += i;
//     }
//   }
//   return arr.reduce((a, b) => a + b);
// }



//Segunda tentativa/código
//
function sumPrimes(num) {
  let arr = [];

  for (let i = 2; i <= num; i++) {
    if (arr.every((x) => i % x !== 0))
      arr.push(i);
  }

  return arr.reduce((a, b) => a + b);


}
console.log(sumPrimes(10));
console.log(sumPrimes(977));