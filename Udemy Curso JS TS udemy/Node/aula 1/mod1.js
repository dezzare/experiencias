// console.log(module)
// Module {
//   id: '.',
//   path: 'pasta/allgumacoisa.js...',
//   exports: {}, -> indica os modulos

//*********************************************************
// Exportando variáveis e funções
//*********************************************************
// const nome = 'Pedro';
// const sobrenome = 'Bittencourt'
// const falaNome = () => {
//   console.log(nome, sobrenome)
// };
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// // // OU
// exports.NOME = nome; // pode alterar o nome
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquercoisa = 'o que quiser' //this está atrelado exports




//*********************************************************
//exportando classes
//*********************************************************
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
exports.Pessoa = Pessoa;
