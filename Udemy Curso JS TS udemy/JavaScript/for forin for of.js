//for = geralmnete com iteráveis (arrayss ou string)
//for in = retorna o índice ou chave (string, array ou objetos)
//for of = retorna valor em si (iteráveis, arrays ou strings)


const frutas = ['Pera', 'Maçã', 'Uva'];



// FOR IN vai ler os índices ou chaves do OBJETO
for (let index in frutas) {
  console.log(index)
}

const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Bittencourt',
  idade: 36,
  endereco: {
    rua: 'waldemar',
    numero: 000
  }
}
//funciona com OBJETOS
for (let chaves in pessoa) {
  // console.log(chaves)
  console.log(chaves, pessoa[chaves])
}


const nomeCompleto = 'Pedro Bittencourt';

for (let valor of nomeCompleto) {
  console.log(valor);
}

//NÃO FUNCIONA for of com OBJETO
for (let nome of pessoa.nome) {
  console.log(nome)
}


const nomes = ['Pedro', 'de Mesquita', 'Bittencourt'];
nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);

});
