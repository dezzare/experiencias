/* eslint-disable */

//Tipos básicos
let nome: string = 'Pedro';
let idade: number = 36;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol')


//Arrays
let arrayNum: Array<number> = [1, 2, 3];
let arrayNum2: number[] = [2, 3, 4];
let arrayStr: Array<string> = ['a', 'b'];
let arrayStr2: string[] = ['a', 'b'];

// Objetos]
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Pedro',

};

//Funções
function soma(x: number, y: number){
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;