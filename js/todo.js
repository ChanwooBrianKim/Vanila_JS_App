const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = []; // To-do list
// Local storage validate
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Delete to-do from the list
function deleteToDo(event) {
  // event.target: refers to the element that triggered the event by 'button'
  // event.target.parentElement: efers to the parent element of the button, which is the <li> element representing the to-do item.
  const li = event.target.parentElement;
  li.remove();
  // toDos.filter(): creates a new array containing only the to-dos that do not match the ID of the deleted item.
  // parseInt(li.id): converts the ID from a string to an integer to match the type of toDo.id
  // (toDo) => toDo.id !== parseInt(li.id): returns true for all to-dos that do not have the same ID as the deleted item
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // Create element <li> not in idnex.html
  li.id = newTodo.id;
  const span = document.createElement("span"); // Create element <span> not in idnex.html
  span.innerText = newTodo.text;
  const button = document.createElement("button"); // Create element <button> not in idnex.html
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // Use deleteToDo function once clicked
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // Prevent refresh
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // unique identifier for each to-do
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

// JSON.parse(savedToDos): Converts the JSON string retrieved from local storage back into a JavaScript array of to-do objects.
// toDos = parsedToDos: Assigns the parsed to-dos to the toDos array, which is the main array used to keep track of the current list of to-dos.
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // Show each to-do at the front-end
}