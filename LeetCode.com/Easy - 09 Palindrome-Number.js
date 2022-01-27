// Problem #9 - Palindrome Number
// https: //leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
  if (x < 0) { /// verifica se é negativo (-11 != 11-)
    return false
  }
  if (x >= 0) {
    let num = String(x).split('') //transforma em string e split cada nº em array
    let reverso = num.reverse() //reverte a ordem do array
    let confere = ''
    for (let i = 0; i < num.length; i++) {
      confere += String(reverso[i]) //loop para juntar array inverso como str
    }
    if (confere == x) { //check str inversa == input, ignora se classe diferente
      return true
    } else {
      return false
    }
  }
}

// Runtime: 176 ms, faster than 83.02% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 47.8 MB, less than 79.21 % of JavaScript online submissions
// for Palindrome Number.
