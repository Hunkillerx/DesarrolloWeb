    var btnLetra = document.getElementsByClassName("btn-letra");
    var pantalla1 = document.getElementById("pantalla");
    var historial = document.getElementById("historial");
    var palabras = ['hola', 'como', 'estas'];
    var letra = "";
    var jugando = false;
    var letClick = function () {
        letra = this.textContent;
        historial.setAtrtribute("value", "value" + letra)
    }

    for (var i = 0; i < btnLetra.length; i++) {
        btnLetra[i].onclick = letClick;
    }

    document.getElementById("empezar").onclick = iniciarJuego

    function getPalabra() {
        var aleatorio = Math.floor(Math.random() * (palabras.length));
        var seleccion = palabras[aleatorio];
        palabra = seleccion.split(" ")
    }

    function iniciarJuego() {
        jugando = true
        var pal = getPalabra();
        pantalla.setAttribute("value", "value" + pal)
    }
