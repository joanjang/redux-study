import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => ({ type: ADD_TODO, text });
const delTodo = id => ({ type: DELETE_TODO, id });

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
};

const store = createStore( reducer );

export const actionCreators = {
    addTodo,
    delTodo
};

export default store;