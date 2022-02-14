function rot13(str) {

  const objRot13 = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    ' ': ' '
  }

  let tmp = [...str]
  let frase = [];
  console.log(tmp)
  tmp.forEach((el => {

    if (objRot13.hasOwnProperty(el)) {
      frase.push(objRot13[el])
    } else {
      frase.push(el)
    }

  }))
  console.log(frase)
  return frase.join('');
}
console.log(rot13("SERR CVMMN!"))
