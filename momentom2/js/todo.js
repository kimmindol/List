const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deletToDo)
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDosObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newToDosObj);
    paintToDo(newToDosObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

