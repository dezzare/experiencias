function convertToRoman(num) {
  const numUm = ['I', 'X', 'C', 'M']
  const numCinco = ['V', 'L', 'D']
  let arrNum = String(num).split('').reverse();
  let numeroRomano = [];

  for (let i = 0; i < arrNum.length; i++) {
    let confere = parseInt(arrNum[i]) - 5;
    let parcial = []
    if (confere < 4) {
      if (confere >= -1) {
        parcial.push(numCinco[i])
        if (confere < 0) {
          while (confere < 0) {
            parcial.unshift(numUm[i])
            confere++
          }
        } else {
          while (confere > 0) {
            parcial.push(numUm[i])
            confere--
          }
        }
      } else {
        while (confere > -5) {
          parcial.push(numUm[i])
          confere--
        }
      }
    }
    if (confere >= 4) {
      parcial.push(numUm[i + 1])

      while (confere < 5) {
        parcial.unshift(numUm[i])
        confere++
      }
    }
    parcial = parcial.join('')
    numeroRomano.unshift(parcial)
  }
  return String(numeroRomano.join(''))
}

console.log(convertToRoman(3))