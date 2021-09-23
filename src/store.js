import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO");
const delTodo = createAction("DELETE_TODO");

const reducer = (state = [], action) => {
  // toolkit 사용시 action의 props는 type과 payload 뿐
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case addTodo.type:
      return [{ id: Date.now(), text: payload }, ...state];
    case delTodo.type:
      return state.filter(({ id }) => id !== +payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  delTodo,
};

export default store;
