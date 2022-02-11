//CHAI = chaisjs.com (documentção)
//lib de asserts
//uso conjunto com o Mocha
//npm i --save-dev chai
//muito mais descritivos

const assert = require ('assert');
const Math = require ('../src/math.js');
const expect = require('chai').expect;

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

    expect(obj).to.equal(obj2); //retorna erro, msm sendo 'igual'
    // isso pq não compara os valores internos obj diferentes
    expect(obj).to.deep.equal(obj2) //assim teste considera igual e Passa

})


