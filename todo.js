const todoList = document.getElementById("list");
const todoInput = document.getElementById("answer");
const addButton = document.getElementById("addButton");

function addTodo() {
  //get to do action from input tag
  let todoAction = todoInput.value;

  //add action to the todoList
  // create and li
  let todoListItem = document.createElement("li");
  // put the value inside the li
  todoListItem.innerText = todoAction;
  //   attach li to the todoList
  todoList.appendChild(todoListItem);
}

addButton.addEventListener("click", addTodo);
