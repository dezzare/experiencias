export class ContaCorrente {
  agencia;
  _cliente;
  //https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md
  _saldo; //por convenção usa _ p/ privado 2022 atualiza p #

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
