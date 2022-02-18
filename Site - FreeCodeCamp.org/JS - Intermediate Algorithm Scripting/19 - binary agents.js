function binaryAgent(str) {

  let newArr = str.split(" ")
  let binToDecimal = [];


  for (let i = 0; i < newArr.length; i++) {
    let sum = 0;
    sum = parseInt(newArr[i], 2)
    sum = String.fromCharCode(sum)
    binToDecimal.push(sum);
  }
  let newStr = binToDecimal.join('')

  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
