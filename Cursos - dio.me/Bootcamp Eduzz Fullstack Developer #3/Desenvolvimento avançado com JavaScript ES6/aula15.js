//Breakpoint no Chrome:
//se colocar 'debugger;' ele interpreta como breakpoint
//sem precisar settar na ferramenta de desenvolvedor
//com isso o local/this fica no scopo determinado pelo break
//assim é possível digitar no console para verificar parâmteros
//
//
//outra maneira p/ debug é usar o console.log
//mas os devs se limitam muito apenas o .log
//e ele é muito mais poderoso, há muito mais parâmetros
//
//dentre eles:
//console.warn('yellow text');
//console.error('red error');
//console.trace(); //traz informações de onde veio a execução
/*
console.group('My group');
console.log('inside group');
console.log('still inside group');
console.groupEnd('My group');
*/

//console.time('log time') //tempo de execução
//
//console.table(['Pedro', 'dio']); //formata em tabela, melhor visualização
console.log('%c styled log', 'color: blue; font-size: 40px');
