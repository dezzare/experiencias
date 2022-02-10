//Tupla é uma mistura de arrays
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [2, 'Pedro', 'Bittencourt'];

dadosCliente2[0] = 100;
dadosCliente2[1] = 'Carlos';
//dadosCliente1[2] = 'Vieira'; não consegue

console.log(dadosCliente1);
console.log(dadosCliente2)

const array1: readonly string[] = ['string', 'string2']
const array2: ReadonlyArray<string> = ['string', 'string2']

