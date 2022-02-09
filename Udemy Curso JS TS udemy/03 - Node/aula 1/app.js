const mod1 = require('./mod1');

//alternativas
// const falaNome = mod1.falaNome 
// const falaNome = require('./mod1').falaNome;
// const { nome, sobrenome, falaNome } = require('./mod1');
// mod1.falaNome()


//importando classes
const { Pessoa } = require('./mod1') //destructuring

const p1 = new Pessoa('Pedro');
console.log(p1)


// npm init -y
// npm i axios
// const axios = require('axios') //não precisa indicar path