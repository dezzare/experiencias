//Antes do ES6:
function multiply(a, b){
  b = b || 1;
  // b = typeof b === 'undefined' ? 1 : b; //assim resolve o problema
  return a * b;
}

console.log(multiply(5,0)); //vai ter comportamento inesperado


//Reescrevento a função com parametros do ES6
function multiplyES6(a, b =1) {
  return a * b;
}
console.log(multiplyES6(5,0));



//Lazy evaluation
function randomNum(){
  return Math.random() * 10;
}
function multiplyLazy(a, b =randomNum()){
  return a * b;
}
console.log(multiplyLazy(5));
