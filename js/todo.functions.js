//FUNCTIONS

function createTodo(id) {
    var textToSave = document.getElementById(id).value;

    //Check for no input or divider = ;
    if (textToSave.length <= 0) {
        alert("Input text");

    } else if (textToSave.search(";") >= 0) {
        alert("Remove the following character: ;");

    } else {
        //Creates an item in the users localStorage
        todoSet(textToSave, 0);

    }
    
    document.getElementById(id).value = null; //Clears the input box

    location.reload(); //Reloads the page
    
}

function todoSet(text, number) {
    var saveText = text;
    var storageKey = number;
    
    //Makes sure object.key doesn't already exist
    if (localStorage.getItem(storageKey)) {
        storageKey++;
        todoSet(saveText, storageKey);

    } else {
        localStorage.setItem(storageKey, saveText + ";" + 0);

    }

}

function deleteTodo(item) {
    var todoGet = localStorage.getItem(item);
    var todoArr = splitToArr(todoGet);

    todoArr[1] = 3;

    localStorage.setItem(item, todoArr[0] + ";" + todoArr[1]);

    location.reload(); //Reloads the page
}


function changeStatus(item) {
    var todoGet = localStorage.getItem(item);
    var todoArr = splitToArr(todoGet);
    
    switch (+todoArr[1]) {
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

    location.reload(); //Reloads the page

}

function badgeClassSet(number) {
    switch (number) {
        case 1:
            return "badge-doing";
        case 2:
            return "badge-done";
        case 3:
            return "badge-deleted";
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
        case 3:
            return "Restore";
        default:
            return "Unknown Status";

    }
}


function splitToArr(text) {
    var arr = text.split(";");
    return arr;
}