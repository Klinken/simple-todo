
//FUNCTIONS

function createTodo(id) {
    var textToSave = document.getElementById(id).value;

    //Check for no input or divider = ;
    if (textToSave.length <= 0) {
        alert("Input text");

    } else if(textToSave.search(";") >= 0){
        alert("Remove the following character: ;");    

    } else {
        //Creates an item in the users localStorage
        todoSet(textToSave, 0);

    }

    location.reload();
}

function todoSet(text, number){
    var saveText = text;
    var storageKey = number;
            //Make sure object.key doesn't exist already
    if(localStorage.getItem(storageKey)){
        storageKey++;
        todoSet(saveText, storageKey);

    } else {
        localStorage.setItem(storageKey, saveText + ";" + 0);

    }

}

function deleteTodo(item){
    var todoGet = localStorage.getItem(item);
    var todoArr = splitToArr(todoGet);

    todoArr[1] = 3;

    localStorage.setItem(item, todoArr[0] + ";" + todoArr[1]);
    
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
