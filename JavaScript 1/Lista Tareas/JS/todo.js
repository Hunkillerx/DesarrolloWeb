function addNewItem(list) {
    var listItem = document.createElement("li");
    listItem.innerText = "Hello";
    list.appendChild(listItem);
}

var btnNew = document.getElementById("btnAdd");

btnNew.onclick = function () {
    addNewItem(document.getElementById("todo-list"));
}
