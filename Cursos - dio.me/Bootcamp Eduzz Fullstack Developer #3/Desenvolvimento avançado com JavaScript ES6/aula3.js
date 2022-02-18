//Enhanced Object Literals

let propriedade2 = 'propriedade2'

let obj = {
  prop1: 'propriedade1',
  prop2: propriedade2,
//  prop3
}

let objSum = {
  sum: function sum(a,b){
    return a + b;
  }
}
console.log(objSum.sum(1,2));

//encurtado:
let objSoma = {
  sum(a,b){
    return a + b;
  }
}
console.log(objSoma.sum(2, 2))


const propName = 'teste';
//antes ES6
let objTeste = {};
objTeste[propName + 'concat'] = 'prop value'
console.log(objTeste);
//depois ES6
let objTesteES6 = {
  [propName + 'concat']: 'prop value'
}
console.log(objTesteES6);
