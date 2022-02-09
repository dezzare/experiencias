//Módulos de alto nível não devem depender de módulos de baixo nível.
//Ambos devem depender de abstrações.
//dependa de abstrações, não ed implem,entações.
//Abstrações não devem depender de detalhes.
//Detalhes devem depender de abstrações
//
//Classe de baixo nível = executam tarefas especializadas
//Classe de alto nível = gerenciam as classes de baixo nível.
//


Order{
  shoppingCart,
  messaging,
  entepriseCustomer
  humamCustomer
}

Order = alto nível
new entepriseCustomer = baixo nível
new humamCustomer = baixo nível


Animal{ //alto
  cachorro //baixo
  gato //baixo
}
