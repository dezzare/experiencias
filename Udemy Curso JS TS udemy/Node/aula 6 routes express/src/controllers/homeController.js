const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: 'Um título de teste',
  descricao: 'Descricao de teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  req.flash('info', 'Olá mundo');
  req.flash('error', 'err mundo');
  req.flash('sucess', 'success mundo');

  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST')
}