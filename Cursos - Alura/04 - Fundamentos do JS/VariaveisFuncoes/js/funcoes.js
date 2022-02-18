let x = '';
console.log(x);
x = 'oi';

function imprimeTexto(texto) {
  console.log(texto);
}

// imprimeTexto(x);

function soma() {
  const resultado = 2 + 2;
  return resultado;
}

// console.log(soma());
console.log((imprimeTexto(soma())));
