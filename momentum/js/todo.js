const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");
const Deltodo = document.querySelector("button");
const todoLi = todoList.querySelector("li");

const TODOS_KEY = "todos";

const todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", DeleteTodo);
  span.innerText = newTodo;
  todoList.appendChild(li);
  button.innerText = "Delete";
}

function DeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
  console.log(todos);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  parsedToDos.forEach(paintTodo);
}
