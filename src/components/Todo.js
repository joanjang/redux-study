import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Todo = ({text, onBtnClick}) => {
    return (
        <li>
            {text} <button onClick={onBtnClick}>DELETE</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({ onBtnClick: () => dispatch( actionCreators.delTodo( ownProps.id )) })

export default connect( null, mapDispatchToProps )(Todo);