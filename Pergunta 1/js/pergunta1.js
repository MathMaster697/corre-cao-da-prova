function mostrarOla() {
    var qualoseunome = document.getElementById("qualoseunome").value;
    document.getElementById("resposta").textContent = "Olá " + qualoseunome;
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla)