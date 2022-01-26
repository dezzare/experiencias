// splice = canivete suiço = pop+push+unshift+shift

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);


//Além de remover o item, ele cria um novo array.
// const removidos = nomes.splice(3, 2) //índice 4, remove 1 (3=Gabriel )

// const negativos = nomes.splice(-2, 2); //remove pra frente
//const removidos = nomes.splice(-2, Number.MAX_VALUE) //da posição até infinito

//adiciona valor no lugar do índice, e pode remover ao mesmo tempo
// const add = nomes.splice(3,1, 'Pedro') 
//console.log(add);

//pop
// const pop = nomes.splice(-1, 1);

//shift
// const shift = nomes.splice(0, 1);

//unshift
// const unshift = nomes.splice(0, 0, 'Pedro');

//push
// const push = nomes.splice(nomes.length, 0, 'Pedro');
console.log(nomes);