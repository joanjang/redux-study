import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO");
const delTodo = createAction("DELETE_TODO");

// createReducer( initial state: [], reducer function ): State mutate 가능
// 1. new State인 경우 return
// 2. state mutate한 경우 void
// ㄴ1, 2가 가능한 이유: Immer is in background. It takes mutations and creates a new state.
const reducer = createReducer([], {
  [addTodo]: (state, { payload }) => {
    state.unshift({ text: payload, id: Date.now() });
    // return [{ id: Date.now(), text: payload }, ...state]; < toolkit 적용 전 state mutate가 불가능했었음
  },
  [delTodo]: (state, { payload }) => state.filter(({ id }) => id !== +payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  delTodo,
};

export default store;
