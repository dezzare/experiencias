//Mocha - ferramenta de testes
// npm i --save-dev mocha
// *spec* entre pontos, no nome do arquivo

//testas o  arquivo math.js
//TTD - faria este arquivo de teste antes de escrever o math.js
//assert.equal = soma 5+5 = 10
const assert = require ('assert');
const Math = require ('../src/math.js');

describe('Math class', function(){
  it('Sum two numbers', function(done) { //usa fn p/ setar timeout
    const math = new Math();
    this.timeout(3000); //seta timeout (default = 2000)
    math.sum(5, 5, value =>{
      assert.equal(value, 10);
      done(); // done declarado server p verificar fim de fn assincrona
    });
  })
})


//usa o only p/ ignorar os outros teste:
//it.only(teste)
//
//hook = beforeEach(), afterEach()
//hooks = executa algo antes de cada teste
//garantir comportamento de variável p ex
//
//let value = 0;
//
//describe(teste fn(){
//beforeEach(function(){
//value = 0;
//})
//})
//it(teste)
//  value = 5
//it(teste)
//  vai ser executado o hook (beforeEach)
//  vai garantir que value seja 0
