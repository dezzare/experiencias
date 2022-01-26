function* geradora1() {
  yield 'Valor 1'; //pode ser função
  yield 'Valor 2';
  yield 'Valor 3';
}

const g1 = geradora1();

// console.log(g1.next().value);
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())

// for (let valor of g1){
//   console.log(valor)
// }

//contador (infinito)
function* geradora2() {
  let i = 0;
  while (true) {
    yield 'g2 ' + i;
    i++;
  }
}
const g2 = geradora2()
//infinito, pode colocar quantas chamadas quiser
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
  yield 'g3 Valor 1';
  yield 'g3 Valor 2';
  yield 'g3 Valor 3';
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor)
}

function* geradora5() {
  yield function() {
    console.log('Fim do y1')
  }
  yield function() {
    console.log('Fim do 21')

  }

  yield function() {
    console.log('Fim do 3y1')
  }
}



const g5 = geradora5();
const func1G5 = g5.next().value;
const func2G5 = g5.next().value;
const func3G5 = g5.next().value;

func1G5();
func2G5();
func3G5();
