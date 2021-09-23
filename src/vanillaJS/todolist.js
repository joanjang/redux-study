import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => ({ type: ADD_TODO, text });
const delTodo = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
  const { type, text, id: id1 } = action;
  switch (type) {
    case ADD_TODO:
      return [{ id: Date.now(), text }, ...state];
    case DELETE_TODO:
      return state.filter(({ id }) => id !== +id1);
    default:
      return state;
  }
};

const showTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach(({ text, id }) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", handleTodoDelete);
    li.id = id;
    li.innerText = `${text} `;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  store.dispatch(addTodo(todo));
};

const handleTodoDelete = (event) => {
  const id = event.target.parentNode.id;
  store.dispatch(delTodo(id));
};

const store = createStore(reducer);
store.subscribe(showTodos);

form.addEventListener("submit", handleTodoSubmit);
