function Tarea(descripcion, fecha, realizada){
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.realizada = realizada;

    this.generarHtmlTarea = function(pos){
        var cadena = '<>'
        var cadena = '<input type="checkbox" name="task';
        cadena += pos+'" id="task'+pos+'" ';
        cadena += realizada?'checked':'';
        cadena += '><label for="task';
        cadena += pos +'">'+this.descripcion+'</label>';

        var edit = document.createElement("button");
        edit.type = "button";
        edit.value = "Editar";
        edit.onclick = func;
        document.appendChild(edit);

        return cadena,edit
    }
}
