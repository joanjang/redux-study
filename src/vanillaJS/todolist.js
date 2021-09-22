const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createTodos = val => {
    const li = document.createElement("li");
    li.innerText = val;
    ul.appendChild(li);
}

const onSubmit = event => {
    event.preventDefault();
    const todo = input.value;
    input.value = "";
    createTodos( todo );
}

form.addEventListener( "submit", onSubmit ); 