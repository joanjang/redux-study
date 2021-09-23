import React from "react";
import { connect } from "react-redux";
import { delTodo } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={onBtnClick}>DELETE</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onBtnClick: () => dispatch(delTodo(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(Todo);
