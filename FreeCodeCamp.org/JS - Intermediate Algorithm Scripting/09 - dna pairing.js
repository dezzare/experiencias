//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  let arr = str.split("");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
        newArr.push([arr[i], 'T']);
        break;
      case 'T':
        newArr.push([arr[i], 'A']);
        break;
      case 'G':
        newArr.push([arr[i], 'C']);
        break;
      case 'C':
        newArr.push([arr[i], 'G']);
        break;
    }
  }


  return newArr;
}

pairElement("GCG");
