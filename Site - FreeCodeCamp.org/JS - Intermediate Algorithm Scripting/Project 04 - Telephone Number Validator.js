function telephoneCheck(str) {
  let arr = [...str];
  let newStr = []
  let re = /[0-9]/
  let rePattern1 = /([1]{1})\s?\(([0-9]{3})\)\s?([0-9]{3}).([0-9]{4})/
  let rePattern2 = /([1]{1})\s?([0-9]{3})-?\s?([0-9]{3}).([0-9]{4})/
  let rePattern3 = /\(([0-9]{3})\)\s?([0-9]{3}).([0-9]{4})/
  let rePattern4 = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(re)) {
      newStr.push(arr[i]);
    }
  }
  if (arr.length == 10) {
    return true

  }

  if (str.match(rePattern4)) {
    return true
  }

  // if(str.match(rePattern1) || str.match(rePattern2) || str.match(rePattern3)){
  //   if(newStr.length <= 11 && arr[0] == 1 || arr[0] == 5 || arr[0] =='('){
  //     return true
  //   } 

  //   } 
  return false;
}

console.log(telephoneCheck("555-555-5555"))