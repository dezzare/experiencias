var pacientes = document.querySelectorAll(".pacientes");

pacientes.forEach(function (paciente) {
    pacientes.addEventListener("dblclick", function () {
        console.log("Fui clicado duas vezes");
        this.remove();
    });
});