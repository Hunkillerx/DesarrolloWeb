/**
 * Crea un objeto de tipo Tarea
 * @param   {[[Type]]} descripcion [[Description]]
 * @param   {[[Type]]} fecha       [[Description]]
 * @param   {[[Type]]} realizada   [[Description]]
 * @returns {[[Type]]} [[Description]]
 */
function Tarea(descripcion, fecha, realizada){
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.realizada =realizada;

    this.generarHtmlTarea = function(pos){
        var cadena = '<div><input type = "checkbox" name="task';
        cadena += pos+ '"id="task'+pos+'" ';
        cadena += realizada?'checked':'';
        cadena += '><lavel for="task';
        cadena += pos +'">'+this.descripcion+'</label></div>';
        return cadena
    }
}

var tareas = [];
var btnTask = document.getElementById("add-task");

btnTask.onclick = function(){
    var inputTask = document.getElementById("input-task");
    tareas.push(new Tarea(""+inputTask.value, new Date(), false));
    var misTareas = document.getElementById("mis-tareas");
    misTareas.innerHTML += tareas[tareas.length - 1].generarHtmlTarea(tareas.length -1);
};
