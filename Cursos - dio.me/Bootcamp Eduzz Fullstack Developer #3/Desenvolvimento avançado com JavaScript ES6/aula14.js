//maneira tradicional de verificar erro:
//criar um bloco de scope try catch

//customizar erro, forma simples:
//const myError = new Error('mensagem')
//throw myError
//

//forma detalhada
class CustomError extends Error {
  constructor({ message, data }) {
    super(message):
    this.data = data;
  }
}

try {
  const name = 'Pedro'
  const myError = newCustomErr({
    message: 'Minha mensagem de erro',
    data: {
      type: 'Server error'
    }
  })

  throw myError;
} catch(err) {
  console.log('Mey Erro: ', err);
  console.log(err.data)
} finally {
  console.log('continue...');
}
