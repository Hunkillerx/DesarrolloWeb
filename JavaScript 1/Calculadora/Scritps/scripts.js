var pantalla = document.getElementById("pantalla");
/*
var historial = document.getElementById("historial");*/
var btnNumeros = document.getElementsByClassName("btn-num");

var numClick = function () {
    if (pantalla.getAttribute("value") === "0") {
        pantalla.setAttribute("Value", this.textContent);
    } else {
        pantalla.setAttribute("value", pantalla.getAttribute("value") + this.textContent);
    }
};


for (var i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].onclick = numClick;
}

var valor1;
var valor2;
var operador;

document.getElementById("operator-+").onclick = function () {
    if (operador === "+") {
        igual();
    } else {
        valor1 = pantalla.getAttribute("value");
        pantalla.setAttribute("value", 0);
        operador = "+";

    }

};

document.getElementById("operator--").onclick = function () {
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "-";
};

document.getElementById("operator-*").onclick = function () {
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "*";
};

document.getElementById("operator-/").onclick = function () {
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "/";
};

document.getElementById("operator-%").onclick = function () {
    valor1 = pantalla.getAttribute("value");
    pantalla.setAttribute("value", 0);
    operador = "%";
};


document.getElementById("operator-=").onclick = function igual() {
    valor2 = pantalla.getAttribute("value");
    switch (operador) {
        case "+":
            resultado = Number(valor1) + Number(valor2);
            break;
        case "-":
            resultado = Number(valor1) - Number(valor2);
            break;
        case "*":
            resultado = Number(valor1) * Number(valor2);
            break;
        case "/":
            resultado = Number(valor1) / Number(valor2);
            break;
        case "%":
            resultado = Number(valor1) * Number(valor2) / 100;
            break;
    };


pantalla.setAttribute("value", resultado);


document.getElementById("operator-c").onclick = function () {
    memoria = 0;
    pantalla.setAttribute("value", 0);
};
    
}
