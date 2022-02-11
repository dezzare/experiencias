//Symbols = identificadores únicos
//se receberem valor, só serve para debbug

const uniqueID = Symbol('Hello');

console.log(uniqueID);

const obj = {
  [uniqueID] : 'Hello',
  _id: 'Hello'
}


//well know symbols
//Symbol.iterator
//Symbol.split
//Symbol.toStringTag

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
for (let value of arr){
  console.log(value);
}


const obj1 = {
  values: [1, 2, 3, 4],
  [Symbol.iterator](){
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i -1],
          done: i > this.values.length
        }
      }
    }
  }
}

for (let value of obj1){
  console.log('Console:', value)
}
