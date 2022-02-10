const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');


//não precisa indicar encoding, ele é utf8 padrão
//flag 'w'=reseta (padrão), 'a'=adiciona após
//interessante p/ arquivo de log
fs.writeFile(caminhoArquivo, 'Frase 1\n', {
  flag: 'w',
  encoding: 'utf8'
});


//exporta p/ app.js
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, {
    flag: 'a',
  });

}
