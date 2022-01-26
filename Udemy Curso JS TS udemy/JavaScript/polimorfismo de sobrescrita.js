//SuplerClass = função construtora
function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

//*****************************************************
//Protótipo de conta
//*****************************************************
Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`Saldo Insuficiente: ${this.saldo}
    `)
    return
  }
  this.saldo -= valor
  this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function() {
  console.log(`Agencia: ${this.agencia} 
  Conta: ${this.conta}
  Saldo: R$${this.saldo.toFixed(2)}
  `);
};

//teste de conta
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(30)


//*****************************************************
//Cria conta corrente e altera proto
//*****************************************************
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;


//*****************************************************
//POLIMOFIRSMO = altera metodo p/ comportar diferente do pai
//*****************************************************
ContaCorrente.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) { //permite saldo negativo até limite
    console.log(`Não é possível sacar ${valor}.
Saldo Insuficiente: ${this.saldo}
    `)
    return
  }
  this.saldo -= valor
  this.verSaldo();
}

// //testes da ContaCorrente
// const contaCorrente1 = new ContaCorrente(11, 22, 0, 100)
// contaCorrente1.depositar(10)
// contaCorrente1.sacar(110)
// contaCorrente1.sacar(1)


//*****************************************************
//Cria Conta Poupança
//*****************************************************
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);

}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;


//testes conta poupança
const contaPoupanca1 = new ContaPoupanca(12, 33, 0);
contaPoupanca1.depositar(10)
contaPoupanca1.sacar(110)
contaPoupanca1.sacar(1)
