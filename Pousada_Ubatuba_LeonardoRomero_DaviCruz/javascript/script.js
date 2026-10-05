const abrirContato = document.getElementById("abrirContato");
const fecharContato = document.getElementById("fecharContato");
const janelaContato = document.getElementById("janelaContato");
const formContato = document.getElementById("formContato");

abrirContato.addEventListener("click", function() {
    janelaContato.style.display = "flex";
});

fecharContato.addEventListener("click", function() {
    janelaContato.style.display = "none";
});

formContato.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Mensagem enviada! Em breve entraremos em contato.");

    janelaContato.style.display = "none";
});