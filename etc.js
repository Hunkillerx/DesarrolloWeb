function iniciar() {
    var letra = '';
    errores = 0;
    intentos = 4;
    noIntentos = document.getElementById('noIntentos');

    for (var i = 0; i < btnLetra.length; i++) {
        btnLetra[i].onclick = letClick;
    }
    var letClick = function () {
        letra = this.textContent;
    }

}
