"use-strict";

//IDs of elements
const todoList = "todo-list";
const todoCreateText = "todo-create-text";
const todoCreateButton = "todo-create-button";

document.getElementById(todoCreateButton).addEventListener("click", function(){
    createTodo(todoCreateText);
});


for (var index = 0; index < localStorage.length; index++) {
    var todoToGet = localStorage.getItem(`todo-${index}`);
    var todoArr = splitToArr(todoToGet);

    document.getElementById(todoList).innerHTML += 
    `<div class="todo">
    <div class="todo-text">
    <p id="todo-${index}-text">${todoArr[0]}</p>
    </div>
    <div class="todo-badge"><span class="badge">${todoArr[1]}</span></div>
    </div>`;

}



//Functions 

function createTodo(id){
    var textToSave = document.getElementById(id).value;

    //Check for no input or divider = ;
    if(textToSave.length <= 0 || textToSave.search(";") > 0){
        if(textToSave.length <= 0){
            alert("Input text");
        }
        alert("Remove the following character ;");
    } else {
            //Creates an item in the users localStorage
    localStorage.setItem("todo-" + localStorage.length, textToSave + ";" + "pending");

    }

    location.reload();
}

function splitToArr(text){
    var arr = text.split(";");
    return arr;
}