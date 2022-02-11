//Rest e Spread Operator
//Rest = transforma parametros em array
//Spread = transforma array em parametros


//Antes ES6 = arguments = palavra resrevada
function sum(a, b){
  let soma = 0;
  for (let i = 0; i < arguments.length; i++){
    soma += arguments[i];
  }
  return soma;
}
console.log(sum(1, 2, 3, 4, 5))

//Depois ES6
function sumES6(...args){
return args.reduce((a, b) => a + b)
}
console.log(sumES6(1, 2, 3, 4, 5))

//arguments é inexistente em arrow functions
const sumArrow = (...args) => args.reduce((a, b) => a + b);
console.log(sumArrow(1, 2, 3, 4, 5))


//spred = strings, arrays, literal objects e objetos iteráveis
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4]
function logArgs(...args){
  console.log(args);
  arrFn(...arr);
}
logArgs(...str);

function arrFn(a, b, c, d){
  console.log(a, b, c, d)
}

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);
