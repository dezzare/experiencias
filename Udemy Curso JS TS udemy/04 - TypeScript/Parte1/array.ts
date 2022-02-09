//Array<T> - T[]
function multiplicaArgs(...args:Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
const result = multiplicaArgs(1, 2, 3);
console.log(result)

function concatenaStr(...args: string[]):string {
  return args.reduce((ac, valor) => ac + valor); //podia ser join()
}

const concatena = concatenaStr('um', 'a');
console.log(concatena)
