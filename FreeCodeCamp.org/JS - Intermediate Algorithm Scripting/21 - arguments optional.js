//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(a, b) {

  function isNum(num) {
    return Number.isInteger(num);
  }
  if (isNum(a)) {
    if (isNum(b))
      return a + b;
    else if (!b)
      return function(b) {
        if (isNum(b))
          return a + b;
      };
  }
}

console.log(addTogether(2, 3));
