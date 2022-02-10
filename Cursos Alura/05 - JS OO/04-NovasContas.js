import {
  Cliente
} from "./02-Cliente.js";

import {
  ContaCorrente
} from "./03-ContaCorrente.js";

import * as contas from "./index.js";

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "alice";
conta2.cliente.cpf = 99988877766655;
conta2.agencia = 202;

let valor = 50;

contas.contaCorrenteRicardo.transferir(valor, conta2);

console.log('valor: ', valor);

