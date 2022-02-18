// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {


//array flat
let source = [...arr]
let target = [];
let sLength = source.length;
let depth = 1; 


function flatIntoArray(target, source, sourceLen, start, depth){
  let targetIndex = start
  let sourceIndex = 0
  
  while(sourceIndex < sourceLen){
    let p = toString(sourceIndex)
    let exists = hasProperty(source, p)
    if (exists){
      let element = source[source.indexOf(p)]
    }
  }
}





  return newArr;
}


console.log(steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]));
