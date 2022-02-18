var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extrai informações do formulário html
    var pacienteForm = obtemPacienteDoFormulario(form);

    //cria tr e td do paciente
    var pacienteTr = montaTr(pacienteForm);

    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

})

function obtemPacienteDoFormulario(form) {

    var pacienteForm = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return pacienteForm;
}

function montaTr(pacienteForm) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(pacienteForm.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pacienteForm.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pacienteForm.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pacienteForm.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pacienteForm.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe) {
    var montaTd = document.createElement("td");
    montaTd.textContent = dado;
    montaTd.classList.add(classe);
    return montaTd;
}