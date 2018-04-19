/**
Documento de javascript que brinda los scripts de control para la pagina web y sus operaciones.
@author Jose Armando Diaz Segura
@date 03 Marzo 2018
@version 1.0
**/

/**
 *Variable que contendra el elemento de la pantalla obtenido de el documento HTML
**/
var pantalla = document.getElementById("pantalla");

/**
 *Variable que contendra el elemento de el texto historial que obtenido de el documento HTML
**/
var historial = document.getElementById("historial");

/**
 *Variable que contendra el elemento de los botones de los numeros. Estos ornaizados como un arreglo de botones.
**/
var btnNumeros = document.getElementsByClassName("btn-num");

/**
 * Variable que obtendra el atributo del button al hacer click y lo presentara en la pantalla
 */
var numClick = function () {
    if (pantalla.getAttribute("value") === "0") {
        pantalla.setAttribute("Value", this.textContent);
    } else {
        pantalla.setAttribute("value",pantalla.getAttribute("value") + this.textContent);
    }
};

/**
 * Elemento que recorre el arreglo y obtiene 
**/
for (var i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].onclick = numClick;
}

var valor1;
var valor2;
var operador = "";
var resultado;

document.getElementById("operator-+").onclick = function suma() {
    if (operador != "") {
        igual();
        valor1 = resultado;
        operador = "+";
    }
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);

    operador = "+";

};

document.getElementById("operator--").onclick = function resta() {
    if (operador != "") {
        igual();
        valor1 = resultado;
        operador = "-";
    }
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "-";
};

document.getElementById("operator-*").onclick = function multi() {
    if (operador != "") {
        igual();
        valor1 = resultado;
        operador = "*";
    }
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "*";
};

document.getElementById("operator-/").onclick = function div() {
    if (operador != "") {
        igual();
        valor1 = resultado;
        operador = "/";
    }
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "/";
};

document.getElementById("operator-%").onclick = function () {
    if (operador != "") {
        igual();
        valor1 = resultado;
        operador = "%";
    }
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "%";
};


document.getElementById("operator-=").onclick =
    function igual() {
        valor2 = pantalla.getAttribute("value");
        switch (operador) {
            case "+":
                resultado = Number(valor1) + Number(valor2);
                historial.append(valor1 + "+" + valor2 + "=" + resultado + " ")
                break;
            case "-":
                resultado = Number(valor1) - Number(valor2);
                historial.append(valor1 + "-" + valor2 + "=" + resultado + " ")
                break;
            case "*":
                resultado = Number(valor1) * Number(valor2);
                historial.append(valor1 + "*" + valor2 + "=" + resultado + " ")
                break;
            case "/":
                resultado = Number(valor1) / Number(valor2);
                historial.append(valor1 + "/" + valor2 + "=" + resultado + " ")
                break;
            case "%":
                resultado = Number(valor1) * Number(valor2) / 100;
                historial = Number(valor1).toString + "*" + Number(valor2).toString;
                break;
        };
        operador = "";
        pantalla.setAttribute("value", resultado);
    }
function igual() {
    valor2 = pantalla.getAttribute("value");
    switch (operador) {
        case "+":
            resultado = Number(valor1) + Number(valor2);
            historial.append(valor1 + "+" + valor2 + "=" + resultado + " ")
            pantalla.setAttribute("value", resultado);
            break;
        case "-":
            resultado = Number(valor1) - Number(valor2);
            historial.append(valor1 + "-" + valor2 + "=" + resultado + " ")
            break;
        case "*":
            resultado = Number(valor1) * Number(valor2);
            historial.append(valor1 + "*" + valor2 + "=" + resultado + " ")
            break;
        case "/":
            resultado = Number(valor1) / Number(valor2);
            historial.append(valor1 + "/" + valor2 + "=" + resultado + " ")
            break;
        case "%":
            resultado = Number(valor1) * Number(valor2) / 100;
            historial.append(valor1 + "%" + valor2 + "=" + resultado + " ")
            break;
    };
    pantalla.setAttribute("value", resultado);
}

document.getElementById("operator-c").onclick = function () {
    operador = "";
    valor1 = 0;
    valor2 = 0;
    resultado = 0;
    pantalla.setAttribute("value", 0);
};
