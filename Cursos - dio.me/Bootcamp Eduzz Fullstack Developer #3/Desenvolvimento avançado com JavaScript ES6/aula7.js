//Genarators
//funções com "pausa"

//atenção ao '*' ao final de function
function* hello (){
  console.log("hello");
  yield 1;

  console.log("from");
  const value = yield 2;

  console.log(value);
}

let it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Ouside'));


function* naturalNumbers(){
  let number = 0;
  while(true){
    yield number;
    number++;
  }
}

it = naturalNumbers()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
