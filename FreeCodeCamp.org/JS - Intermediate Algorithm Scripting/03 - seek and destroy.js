//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// Remove all elements from the initial array that are of the same value as these arguments.

//////////// Primeira tentativa:
// até 3 arg funcionou
///////////
// function destroyer(arr, des1, des2, des3) {
//   for (let i = arr.length; i >= 0; i--){
//     if (arr[i] == des1 || arr[i] == des2 || arr[i] == des3) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
////////////

//////////// Segunda tentativa:
function destroyer(arr, ...remove) {
  let rem = [...remove]
  let newArr = [...arr]
  for (let i = 0; i < rem.length; i++) {
    for (let j = arr.length; j >= 0; j--) {
      if (newArr[j] === rem[i]) {
        newArr.splice(j, 1);

      }
    }

  }

  return newArr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// mais do que 3 parâmetros a serem removidos
// Deve retornar: [12,92,65]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
