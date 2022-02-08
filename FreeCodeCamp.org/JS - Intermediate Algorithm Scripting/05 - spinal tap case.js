// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // \s espaços |ou _ ou| sguido maiuscula(?=[A-Z])
  let newStr = str.split(/\s|_|(?=[A-Z])/).join("-")

  return newStr.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"))
