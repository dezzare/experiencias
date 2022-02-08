//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  let atributo = Object.keys(source);
  let newArr = collection.filter(function(a) {
    return atributo.every(function(b) {
      if (a.hasOwnProperty(b) && a[b] == source[b]) {
        return true
      };
    })
  })

  return newArr

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{
  "apple": 1,
  "bat": 2
}, {
  "bat": 2
}, {
  "apple": 1,
  "bat": 2,
  "cookie": 2
}], {
  "apple": 1,
  "bat": 2
}));