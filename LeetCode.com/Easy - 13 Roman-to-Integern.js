function nR(s) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let accumulator = 0;
  for (let i = 0; i < s.length; i += i) {
    if (s[i] === 'I' && s[i + 1] === 'V') {
      accumulator += 4;
      i += i;
    } else if (s[i] === 'I' && s[i + 1] === 'X') {
      accumulator += 9;
      i += i;
    } else if (s[i] === 'X' && s[i + 1] === 'L') {
      accumulator += 40;
      i += i;
    } else if (s[i] === 'X' && s[i + 1] === 'C') {
      accumulator += 90;
      i += i;
    } else if (s[i] === 'C' && s[i + 1] === 'D') {
      accumulator += 400;
      i += i;
    } else if (s[i] === 'C' && s[i + 1] === 'M') {
      accumulator += 900;
      i += i;
    } else {
      accumulator += romanNumbers[s[i]];
    }
  }
  return accumulator;
}

console.log(nR('III'));
