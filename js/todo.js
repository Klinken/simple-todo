
//IDs of elements
const todoList = "todo-list";
const todoListDoing = "todo-list-doing";
const todoListDone = "todo-list-done";
const todoListRemoved = "todo-list-removed";
const todoCreateText = "todo-create-text";
const todoCreateButton = "todo-create-button";



//Made to be used in the loop
function createHTML(targetID){
    document.getElementById(targetID).innerHTML +=
    `<div id="todo-${index}" class="todo" title="Click on status to change status">
        <div class="todo-text">
        <p>${todoArr[0]}</p>
        </div>
        <div class="todo-badge" onclick="changeStatus(${index})" title="Click here to change status"><span class="${badgeClassSet(+todoArr[1])}">${displayStatus(+todoArr[1])}</span></div>
        <button onclick="deleteTodo(${index})">Remove</button>
     </div>`;
}


for (var index = 0; index < localStorage.length; index++) {
    var todoItemGet = localStorage.getItem(index);
    var todoArr = splitToArr(todoItemGet);
    var currentTodo = "todo-" + index;

    if(todoArr[1] == "0" && document.getElementById(todoList)){
        createHTML(todoList);
         
    } else if(todoArr[1] == "1" && document.getElementById(todoListDoing)){
        createHTML(todoListDoing);

    } else if(todoArr[1] == "2" && document.getElementById(todoListDone)){
        createHTML(todoListDone);

    } else if(todoArr[1] == "3" && document.getElementById(todoListRemoved)) {
        createHTML(todoListRemoved);
    }

}


//Setup eventlisteners

document.getElementById(todoCreateButton).addEventListener("click", function () {
    createTodo(todoCreateText);
});