import {
  Cliente
} from "./02-Cliente.js";

import {
  ContaCorrente
} from "./03-ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233344455;

cliente2.nome = 'Alice';
cliente2.cpf = 22222233344455;


const contaCorrenteRicardo = new ContaCorrente();



contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 500;
console.log(contaCorrenteRicardo.saldo);
let valorSacado = 200;

contaCorrenteRicardo.saldo -= valorSacado;
console.log(contaCorrenteRicardo.saldo)
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo)


// cliente2.agencia = 2002;
// cliente2.saldo = 150;
