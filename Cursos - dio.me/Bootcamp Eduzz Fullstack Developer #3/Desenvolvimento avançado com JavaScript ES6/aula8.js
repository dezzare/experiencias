function doSomething(callback) {
  setTimeout(function() {
    //faz algo
    callback('First data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    //faz outra coisa
    callback('Second data');
    }, 1000);
}

function doAll() {
  try { //erro1
  doSomething(function(data) {
    let processData = data.split('');
    try { // erro2
    doOtherThing(function(data2){
      let processData2 = data2.split('');
      setTimeout(function() {
        console.log(processData, processData2);
      }, 1000);
    });
    } catch(e) {
      //pega e lida com o erro 'e' eerr2
    }
  });
  } catch(e){
    // pega e lida com erro  erro1
  }
}

doAll();

//código reescrito com funções do ES6
//usando Promise
//Promise não precisa ser invocadas

const doSomethingPromise = new Promise((res, rej) => {
  setTimeout(function() {
    //faz algo
    callback('First data');
  }, 1000);
});

const doOtherThingPromise= new Promise((res, rej) => {
  setTimeout(function() {
    //faz outra coisa
    callback('Second data');
    }, 1000);
  throw new Error('Something went wrong') //vai jogar um erro e ignora as linhas de baixo
});

// .then após concluir faça isso:
doSomethingPromise
  .then( data => {
    console.log(data)
    return doOtherThingPromise()
  })
  .then(data2 => console.log(data2))
  .catch(e => console.log('Ops', e));
