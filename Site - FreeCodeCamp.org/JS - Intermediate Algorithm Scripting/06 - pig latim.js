// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


//********* Primeira tentativa
// não lida com palavras com várias consoantes no início, ou sem vogal
// function translatePigLatin(str) {
//   const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//   let arr = [...str];
//   let tmp1 = arr[0]
//   let tmp2 = arr[1]
//   console.log(vogais.indexOf(tmp1));
//   if (vogais.indexOf(tmp1) >= 0) {
//     arr = [...str];
//     arr.push("way");
//   } else if (vogais.indexOf(tmp1) < 0 && vogais.indexOf(tmp2) < 0) {
//     tmp1 = arr.splice(0, 1);
//     tmp2 = arr.splice(0, 1);
//     arr.push(...tmp1, ...tmp2)
//     arr.push("ay")
//     arr.join('')
//   } else {
//     tmp1 = arr.splice(0, 1);
//     arr.push(...tmp1);
//     arr.push("ay")
//     arr.join('')

//   }

//   return arr.join('')

// }
// console.log(translatePigLatin("schwartz"))

//********* Segunda tentativa
function translatePigLatin(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = [...str];
  let tmp = [];
  let i = arr.length
  if (vogais.indexOf(arr[0]) >= 0) {
    arr = [...str];
    arr.push("way");
  } else {
    while (vogais.indexOf(arr[0]) < 0 && i >= 0) {
      tmp.push(arr.splice(0, 1));
      i--;
    }
    if (arr == null) {
      arr = [...str]
      arr.push("way")
    } else {
      arr.push(...tmp);
      arr.push("ay")

    }
  }

  return arr.join('')

}
