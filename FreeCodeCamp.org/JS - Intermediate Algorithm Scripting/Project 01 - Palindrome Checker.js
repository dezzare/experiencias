function palindrome(x) {

  let num = String(x).toLowerCase().split('')

  let confere = []
  for (let i = 0; i < num.length; i++) {
    if (String(num[i]) === String(num[i].match(/[a-z]|[0-9]/)))
      confere.push(String(num[i]))
  }

  let reverso = [...confere]
  reverso.reverse()

  console.log(reverso.join(''))
  console.log(confere.join(''))
  if (confere.join('') === reverso.join('')) {
    return true
  } else {
    return false
  }
}

