// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  let letra1 = before.charAt(0)
  let letra2 = after.charAt(0)

  if (letra1 === before.charAt(0).toLowerCase() || after.charAt(0) != letra2.toLowerCase()) {
    return str.replace(before, after.toLowerCase())
  } else {
    letra1 = after.charAt(0)
    letra2 = after.charAt(0).toUpperCase().concat(after.slice(1))
    return str.replace(before, letra2)

  }
}
