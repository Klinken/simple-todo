"use-strict";

//IDs of elements
const todoList = "todo-list";
const todoCreateText = "todo-create-text";
const todoCreateButton = "todo-create-button";


for (var index = 0; index < localStorage.length; index++) {
    var todoKeyGet = localStorage.key(index);
    var todoItemGet = localStorage.getItem(todoKeyGet);
    var todoArr = splitToArr(todoItemGet);
    var currentTodo = "todo-" + index;

    document.getElementById(todoList).innerHTML +=
        `<div id="todo-${todoKeyGet}" onclick="changeStatus('${todoKeyGet}')" class="todo" title="Click to change status">
            <div class="todo-text">
            <p>${todoArr[0]}</p>
            </div>
            <div class="todo-badge"><span class="${badgeClassSet(+todoArr[1])}">${displayStatus(+todoArr[1])}</span></div>
            <button onclick="delete(${todoKeyGet})">Remove</button>
         </div>`;

}


//Helper functions

function createTodo(id) {
    var textToSave = document.getElementById(id).value;

    //Check for no input or divider = ;
    if (textToSave.length <= 0 || textToSave.search(";") > 0) {
        if (textToSave.length <= 0) {
            alert("Input text");
        }
        alert("Remove the following character: ;");

    } else {
        //Creates an item in the users localStorage
        todoSet(textToSave, localStorage.length);

    }

    location.reload();
}

function todoSet(text, id){
    var saveText = text;
    var storageKey = id;
            //Make sure object.key doesn't exist already
            if(localStorage.key(id)){
            localStorage.setItem(storageKey, text + ";" + 0);
                
            }

        todoSet(saveText, storageKey++);

}

function deleteTodo(id){
    localStorage.removeItem(id);
    location.reload();
}


function changeStatus(item) {
    var todoGet = localStorage.getItem(item);
    var todoArr = splitToArr(todoGet);
    switch(+todoArr[1]){
        case 0:
            todoArr[1] = 1;
            break;
        case 1:
            todoArr[1] = 2;
            break;
        default:
            todoArr[1] = 0;

    }

    localStorage.setItem(item, todoArr[0] + ";" + todoArr[1]);
    location.reload();
    
}

function badgeClassSet(number){
    switch (number) {
        case 1:
            return "badge-doing";
        case 2:
            return "badge-done";
        default:
            return "badge";

    }
}

function displayStatus(number) {
    switch (number) {
        case 0:
            return "Pending";
        case 1:
            return "Doing";
        case 2:
            return "Completed";
        default:
            return "Oh no";

    }
}


function splitToArr(text) {
    var arr = text.split(";");
    return arr;
}


//Setup eventlisteners

document.getElementById(todoCreateButton).addEventListener("click", function () {
    createTodo(todoCreateText);
});