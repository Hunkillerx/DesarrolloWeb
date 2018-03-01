console.log("Hola mundo");
alert("Hola mundo");
document.write("<h1> Hola mundo </h1>");

var booleano = true;

if (booleano) {
    alert("opcion verdadera");
} else if (!booleano) {
    alert("opcion falsa")
} else {
    alert("opcion alien")
}
numero = 1
switch (numero) {
    case 1:
        alert("Te gustan los primos falsos");
        break;
    case 2:
        alert("El primo par");
        break;
    case 3:
        alert("El primo impar");
        break;
    case 4:
        alert("La suma de los primeros tres casos");
        break;
    case 5:
        alert("Si no es otro de los casos")
        break;
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}
var j = 0;

while (j < 10) {
    console.log(j);
    j++;
}

var arreglo = new Array('ospina', 'arias', 'mina', 'sanchez', 'fabra', 'sanchez', 'aguilar', 'rodriguez', 'cuadrado', 'zapata', 'falcao');

for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
while (arreglo.length > 0) {
    console.log(arreglo.pop());
}

/**
 * [[Description]]
 * @param   {[[Type]]} lado1 [[Description]]
 * @param   {[[Type]]} lado2 [[Description]]
 * @param   {[[Type]]} lado3 [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

/**
 * [[Description]]
 * @param   {[[Type]]} lado1 [[Description]]
 * @param   {[[Type]]} lado2 [[Description]]
 * @param   {[[Type]]} lado3 [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function semiperimetro(lado1, lado2, lado3) {
    return perimetroTriangulo(lado1, lado2, lado3) / 2;
}

function areaTriangulo() {
    return perimetroTriangulo * 2;
}

var elementoPorEtiqueta = document.getElementsByTagName("p");

var elementoPorClase = document.getElementsByClassName('parrafo-class');

var elementoPorID = document.getElementById('parrafo-id');

var elementoNuevo = document.createElement("p", "Soy un elemento creado");

elementoNuevo.textContent = "Soy un elemento creado"
elementoPorID.appendChild(elementoNuevo);
