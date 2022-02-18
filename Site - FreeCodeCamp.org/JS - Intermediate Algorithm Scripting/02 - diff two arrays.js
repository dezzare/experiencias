// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

//retornar a diferença entre dois arrays;

function diffArray(arr1, arr2) {
  let newArr = [];

  arr1.forEach(function(arg) {
    if (arr1.includes(arg) && arr2.includes(arg) || newArr.includes(arg)) {

    } else {
      newArr.push(arg)
    }
  })

  arr2.forEach(function(arg) {
    if (arr1.includes(arg) && arr2.includes(arg) || newArr.includes(arg)) {

    } else {
      newArr.push(arg)
    }
  })

  return newArr;
};



console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//["pink wool"]
