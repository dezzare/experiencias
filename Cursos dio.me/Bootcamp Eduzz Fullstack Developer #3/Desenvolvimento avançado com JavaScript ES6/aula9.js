//Fetch = fazer requisiçoes com promises

fetch('/data,json')
  .then(responseStream => responseStream.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log('Erro', e);
  })

//ES7 veio o Async / Await
//Async já transforma a função em promise
const asyncTimer = () =>
  new Promise ((res, rej) => {
  setTimeout(() => {
    resolver(12345);
  }, 1000);
  });

const simpleFunc = async () => {
  const data = await asyncTimer();
  return data;
};


simpleFunc()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
