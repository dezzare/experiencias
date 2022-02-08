//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

function convertHTML(str) {
  let string = [...str];
  let substituir = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&apos;']
  ]
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substituir.length; j++) {
      if (string[i] == substituir[j][0]) {
        string[i] = substituir[j][1];
      }

    }
  }

  return string.join('');
}

convertHTML("Dolce & Gabbana");
