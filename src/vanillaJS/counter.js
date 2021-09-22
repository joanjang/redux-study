import { createStore } from "redux";

const add = document.getElementById("jsAdd");
const minus = document.getElementById("jsMinus");
const count = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

count.innerText = 0;

const countModifier = ( cnt = 0, action ) => {
    switch( action.type ) {
        case ADD:
            return cnt + 1;
        case MINUS:
            return cnt - 1;
        default:
            return cnt;
    }
}

const countStore = createStore( countModifier );
countStore.subscribe( () => count.innerText = countStore.getState() );

const handleAdd = () => countStore.dispatch( {type: ADD} );
const handleMinus = () => countStore.dispatch( {type: MINUS} );

add.addEventListener( "click", handleAdd );
minus.addEventListener( "click", handleMinus );