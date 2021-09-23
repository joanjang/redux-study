import React from "react";
import { connect } from "react-redux";
import { delTodo } from "../store";

let did = 0;
const Detail = ({ todo, todos, onBtnClick }) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>create at: {todo?.id}</h5>
      <button onClick={onBtnClick}>DELETE</button>
      <span>{JSON.stringify(todos)}</span>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  did = id;
  return {
    todo: state.find(({ id: tid }) => tid === +id),
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onBtnClick: () => dispatch(delTodo(did)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
