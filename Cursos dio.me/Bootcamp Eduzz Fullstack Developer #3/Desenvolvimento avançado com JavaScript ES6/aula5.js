let arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

const apple = arr[0];
const banana = arr[1];
const orange = arr[2];
const tomato = arr[3][0];

//Destructuring Assignment
const [apple2, banana2, orange2, [tomato2]]  = ['Apple', 'Banana', 'Orange', ['Tomato']];
const [apple3, banana3, orange3, tomato3]  = ['Apple', 'Banana', 'Orange', ['Tomato']];
const [arr1, arr2, arr3, arr4] = arr;

console.log(apple, apple2,apple3, tomato, tomato2, tomato3);

const obj = {
  name: 'Pedro',
  prop: {
    age: 36,
    colors: ['black', 'red']
  }
};

const {name: name2 } = obj
//const {prop: {age}, prop: {colors}} = obj
const {prop: {age, colors: [cor1, cor2]}} = obj;

console.log(arr1, arr2, arr3, arr4)
console.log(name2)
console.log(age)
//console.log(colors)
console.log(cor1, cor2)
