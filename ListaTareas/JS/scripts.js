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
        cadena += '><label for="task';
        cadena += pos +'">'+this.descripcion+'</label></div>';
        cadena += '<button class="btn btn-outline-primary btn-small" id="btn-edit">Edit</button>';
        cadena += ' <button class="btn btn-outline-danger btn-small" id="btn-remove">Remove</button>';
        return cadena
    }
}

var tareas = [];
var btnTask = document.getElementById("add-task");
var btnEdit = document.getElementById("btn-edit");
var btnRemove = document.getElementById("btn-remove");

btnTask.onclick = function(){
    var inputTask = document.getElementById("input-task");
    tareas.push(new Tarea(""+inputTask.value, new Date(), false));
    var misTareas = document.getElementById("mis-tareas");
    misTareas.innerHTML += tareas[tareas.length - 1].generarHtmlTarea(tareas.length -1);
};

btnEdit.onclick = function(){
    var editTask = document.getElementById('"task '+pos+'"');
    editTask.contentEditable(true);
};

var deleteTask = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
}

btnRemove.onclick = deleteTask;
