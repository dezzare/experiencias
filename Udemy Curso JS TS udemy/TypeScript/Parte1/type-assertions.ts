//Condicional
const bodyCondicional = document.querySelector('body');
if (bodyCondicional) bodyCondicional.style.background = 'red';

//Type assertion
const bodyTypeAssertion = document.querySelector('body') as HTMLBodyElement;
bodyTypeAssertion.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'qualquer coisa';
input.focus();


//Não Recomendado
//Type assertion
const input2 = (document.querySelector('.input') as unknown) as number;

//Não recomendado
//Non-null assertion (!)
const bodyNonNull = document.querySelector('body')!;
bodyNonNull.style.background = 'red';
