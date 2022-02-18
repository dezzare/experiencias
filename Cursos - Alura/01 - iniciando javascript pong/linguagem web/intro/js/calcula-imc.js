var tituloJs = document.querySelector(".titulo-principal");
tituloJs.textContent = "Teste de titulo";

var pacientes = document.querySelectorAll(".paciente");

function getDados() {
    for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

getDados();

function verificaPeso(peso) {
    var verificaPeso = false;
    if (peso <= 0 || peso >= 1000) {
        verificaPeso = false;
        return verificaPeso;
    } else {
        verificaPeso = true;
        return verificaPeso;
    }
}

function verificaAltura(altura) {
    var verificaAltura = false;
    if (altura <= 0 || altura >= 1000) {
        verificaAltura = false;
        return verificaAltura
    } else {
        verificaAltura = true;
        return verificaAltura;
    }
}

function calculaImc(peso1, altura1) {
    var imc = 0;
    if (verificaPeso(peso1) == false || verificaAltura(altura1) == false) {
        imc = "Parâmetro inválido!";
        return imc;
    } else {
        imc = peso1 / (altura1 * altura1);
        return imc.toFixed(2);

    }
}