import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    };
}

export const delTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
}

const reducer = ( state = [], action ) => {
    const { type, text, id: aid } = action;
    switch( type ) {
        case ADD_TODO:
            return [{ id: Date.now(), text }, ...state];
        case DELETE_TODO:
            return state.filter( ({ id }) => id !== +aid );
        default:
            return state;
    }
}

const store = createStore( reducer );

export default store;