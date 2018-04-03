
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

//Nuev elemento Task List
var createNewTaskElement = function(taskString){
    
    //Crear lista
    var listItem = document.createElement("li");
    
    //Checkbox
    var checkBox = document.createElement("input");
    
    //Label
    var label = document.createElement("label");
    
    //Input (text)
    var editInput = document.createElement("input");
    
    //Button.edit
    var editButton = document.createElement("button");
    
    //Button.delete
    var deleteButton = document.createElement("button");
    
    // Cada elemento necesita ser modificado
    
    checkBox.type = "checkbox";
    editInput.type = "text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    
    label.innerText = taskString;
    
    // Cada elemento necesitar ser añadido
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    return listItem;
}

// Añadir una tarea

var addTask = function(){
    // Crear una tarea con el texto obtenido de #new-task
    var listItem = createNewTaskElement(taskInput.value);
    // Añadir listItem a las tareas incompletas
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    
    taskInput.value = "";
    
}

//Editar una tarea ya existente

// Edit an existing task
var editTask = function() {
  console.log("Edit Task...");
  
  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
    // Si la clase del padere es .editMode
  if(containsClass) {
      
      // Cambia de .editMode
      // Hace que el texto del label sea el valor del input
    label.innerText = editInput.value;
  } else {
      // Cambia a .editMode
      // Hace que el valor del input sea el valor del label
    editInput.value = label.innerText;
  }
    // Cambia la clase a .editMode
  listItem.classList.toggle("editMode");
 
}
// Elimina una tarea ya existente
var deleteTask = function(){
    
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    ul.removeChild(listItem);
}

// Marcar una tarea como completa
var taskCompleted = function(){
    
    //Añade la tarea a la lista de completas #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// Marcar una tarea como incompleta
var taskIncomplete = function(){
    
    //Cuando el checkbox este desmarcado
    //Añadir a la lista de incompletas #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    
    // Seleccionar los hijos de la taskList
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    
    //Enlazar editTask al boton de Editar
    editButton.onclick = editTask;
    
    //Enlazar deleteTask al boton de eliminar
    deleteButton.onclick = deleteTask;
    
    //Enlazar el control de eventos en el checkbox al checkbox
    checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function(){
    console.log("AJAX Request");
}

// Enlazar el click Handler a la funcion addTask
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

for(var i = 0; i < incompleteTasksHolder.children.length; i++){
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < completedTasksHolder.children.length; i++){
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
