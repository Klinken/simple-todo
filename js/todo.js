//IDs of elements
const todoList = "todo-list-pending";
const todoListDoing = "todo-list-doing";
const todoListDone = "todo-list-done";
const todoListRemoved = "todo-list-removed";
const todoCreateText = "todo-create-text";
const todoCreateButton = "todo-create-button";



//Made to be used in the loop
function createHTML(targetID, deletedBool) {
    document.getElementById(targetID).innerHTML +=
        `<div class="todo-wrap">
    <div id="todo-${index}" class="todo" title="Click on status to change status">
        <div class="todo-text">
        <p>${todoArr[0]}</p>
        </div>
        <div class="todo-badge" onclick="changeStatus(${index})" title="${deletedBool ? 'Click to restore' : 'Click to change status'}">
        <span class="${badgeClassSet(+todoArr[1])}">${displayStatus(+todoArr[1])}</span>
        </div>
        <button class="delete-button" onclick="deleteTodo(${index})" ${deletedBool ? "style='display:none;'" : ""}>Remove</button>
     </div>
     </div>`;
}


for (var index = 0; index < localStorage.length; index++) {
    var todoItemGet = localStorage.getItem(index);
    var todoArr = splitToArr(todoItemGet);
    var currentTodo = "todo-" + index;

    if (todoArr[1] == "0" && document.getElementById(todoList)) {
        createHTML(todoList, false);

    } else if (todoArr[1] == "1" && document.getElementById(todoListDoing)) {
        createHTML(todoListDoing, false);

    } else if (todoArr[1] == "2" && document.getElementById(todoListDone)) {
        createHTML(todoListDone, false);

    } else if (todoArr[1] == "3" && document.getElementById(todoListRemoved)) {
        createHTML(todoListRemoved, true);
    }

}


//Setup eventlisteners

document.getElementById(todoCreateText).addEventListener("keyup", function (event) { // Triggers the button to create a todo, with a key (Enter)
    if (event.keyCode === 13) {
        createTodo(todoCreateText);
    }
});

document.getElementById(todoCreateButton).addEventListener("click", function () { // Same function but activates on click
    createTodo(todoCreateText);
});