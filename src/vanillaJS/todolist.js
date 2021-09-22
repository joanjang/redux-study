import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";

const reducer = ( state = [], action ) => {
    const { type, text } = action;
    if( type === ADD_TODO )
        return [{ text }, ...state];
    return state;
}

const store = createStore( reducer );

const showTodos = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach( todo => {
        const li = document.createElement("li");
        li.innerText = todo.text;
        ul.appendChild(li);
    });
}

store.subscribe( () => console.log( store.getState() ) );
store.subscribe( showTodos );

const onSubmit = event => {
    event.preventDefault();
    const todo = input.value;
    input.value = "";
    store.dispatch( { type: ADD_TODO, text: todo } );
}

form.addEventListener( "submit", onSubmit ); 