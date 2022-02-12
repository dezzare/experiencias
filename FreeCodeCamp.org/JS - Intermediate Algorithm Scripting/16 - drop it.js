// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {

  let newArr = [...arr]

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      break
    }
    newArr.shift();
  }


  return newArr;
}