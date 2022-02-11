//Sinon
//npm i --save-dev sinon
//quando precisa 'mochar'
//mochar 'funções', verificar se foram chamadas
//verificar a chamada e qual valor foi enviado/recebido
//teste bem específico

const assert = require ('assert');
const Math = require ('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function(){
  //hook
  beforeEach(function() {
    value = 0
  })
  it('Sum two numbers', function(done) {
    const math = new Math();
    this.timeout(3000);

    value = 5;

    math.sum(value, 5, value =>{
      //assert.equal(value, 10);
      expect(value).to.equal(10);
      done();
    });
  })

  //aqui é executado beforeEach() automaticamente
  //garantindo value=0
  it('Multiply two numbers', function() {
    const math = new Math();
    //value*5=0
    expect(math.multiply(value, 5)).to.equal(0);
  })

   it('teste propriedade obj', function() {
    const math = new Math();
    const obj = {
       name: 'Pedro'
    }

    const obj2 = {
      name: 'Pedro'
    }
    // expect(obj).to.have.property('name');
    //     OU
//    expect(obj)
//      .to.have.property('name')
//      .equal('Pedro');
//  })

    //expect(obj).to.equal(obj2); //retorna erro, msm sendo 'igual'
    // isso pq não compara os valores internos obj diferentes
    expect(obj).to.deep.equal(obj2) //assim teste considera igual e Passa
    });

  //only vai bloquear outros testes
  it.only('Calls res with sum and index values', function() {
    const req = {};
    const res = {
      load: sinon.spy() //vai chamar resolução e esperar resposta
    };
    const math = new Math();
    math.primSum(req, res, 5, 5);
//    expect(res.load.calledOnce).to.be.true; //verifica se foi chamado
//    expect(res.load.args[0][0]).to.equal('index'); //primeiro arg = index?
    expect(res.load.args[0][1]).to.equal(10); //segundo arg = resultado soma?

  })

}
