import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import detail from "../routes/Detail";
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
  onBtnClick: () => dispatch(actionCreators.delTodo(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(Todo);
