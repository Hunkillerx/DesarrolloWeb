var botonZoom = document.getElementById("btn-zoom");

var zoom = function () {
    if (imagen.className === "imagen-normal") {
        imagen.className = "imagen-zoom"
        botonZoom.textContent = "Reducir"
    } else if (imagen.className === "imagen-zoom") {
        imagen.className = "imagen-normal"
        botonZoom.textContent = "Zoom"
    }
}
imagen.onclick = zoom;
botonZoom.onclick = zoom;
