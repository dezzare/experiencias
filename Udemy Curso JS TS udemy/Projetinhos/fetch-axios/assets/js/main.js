fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// colocar chamada do script axios no html
// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table'); {
    const tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = "<b> Nome </b>";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.innerHTML = '<b>Idade</b>';
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.innerHTML = '<b>Salário</b>';
    tr.appendChild(td3)
    table.appendChild(tr)

  }

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3)

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
