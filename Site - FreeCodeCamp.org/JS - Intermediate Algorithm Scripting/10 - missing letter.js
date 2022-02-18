// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const abcSplit = [...abc.split('')];
  const range = [...str.split('')];
  const rangeABC = abcSplit.indexOf(range[0]);
  const newABC = abcSplit.splice(rangeABC, range.length);

  if (newABC.join() === range.join()) {
    return undefined;
  };

  let retorno = newABC.filter((x, y) => x != range[y]);

  return retorno[0];

}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
