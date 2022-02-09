const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const caminhoJson = path.resolve(__dirname, '.', 'teste.json');

const pessoas = [
  {
    nome: 'João'
  },
  {
    nome: 'Maria'
  },
  {
    nome: 'Francisco'
  },
  {
    nome: 'Mariana'
  }
];
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoJson, json)

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(element => console.log(element.nome));
}


lerArquivo(caminhoJson);

