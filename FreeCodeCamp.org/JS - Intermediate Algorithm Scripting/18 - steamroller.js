function steamrollArray(arr) {

  let newStr = arr.toString().replace(',,', ',');
  let newArr = newStr.split(',');

  let final = newArr.map(function(x) {
    if (x == '[object Object]') {
      return {};
    } else if (isNaN(x)) {
      return x;
    } else {
      return parseInt(x);
    }
  })

  console.log(newStr)

  return final;
}

steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);
