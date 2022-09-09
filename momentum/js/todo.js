const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todoList");
const Deltodo = document.querySelector("button")
const todoLi = todoList.querySelector("li")


function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", DeleteTodo);
    span.innerText = newTodo;
    todoList.appendChild(li);
    button.innerText = "Delete"
    }

function DeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);