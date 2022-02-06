
function add(a: number, b: number) {
  return a + b;
}
console.log(add(10, 20));


//ts reclama se usar + p/ concatenar string+number
//deve fazer verificação
//não te deixa fazer se, ter certeza do que está fazendo
function addOrConcat(a:number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20)); //retorna 30
console.log(addOrConcat('10', '20')) //retorna 1020
