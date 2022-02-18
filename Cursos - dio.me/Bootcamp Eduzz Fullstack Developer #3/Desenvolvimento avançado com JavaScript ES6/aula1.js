function fn(value){
  console.log(value);
}

fn('valor')

let log = function(value) {
  console.log(value);
}

log('teste');


//ES6 permite Arrow function;
//Não sofrem hoisting

let sum = (a, b) => a+b;
console.log(sum(1,2));

let creatObj = () => ({test: 123});
console.log(creatObj());

let obj = {
  showContext: function showContext(){
    const _that = this;
    console.log(this);

    setTimeout(
      function() {
        this.log( 'after 1000ms' );
        _that.log('outro')
      }.bind(this),
      1000
    );

  },
  log: function log(value) {
    console.log(value);
  }
};

obj.showContext();
