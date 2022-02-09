const express = require('express');

const app = express();

// CRUD -> Create, Read, Update, Delete
//        POST, GET, PUT, DELETE

app.use(express.urlencoded({ extended: true }));
app.get('/', (requisicao, resposta) => {
  resposta.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send(`
  Formulário enviado com seguinte conteúdo: <br>
  ${req.body.nome}
  `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send(req.params.idUsuarios);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
