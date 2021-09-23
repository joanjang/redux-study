import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Todo from '../components/Todo';

const Home = ({ todos, addTodo }) => {
    const [text, setText] = useState("");
    const onChange = event => setText( event.target.value );
    const onSubmit = event => {
        event.preventDefault();
        addTodo(text);
        setText("");
    };
    return (
        <>
            <h1>TO DOS</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} placeholder="Write to do" />
                <button>Add</button>
            </form>
            <ul>{todos.map( todo => <Todo {...todo} key={todo.id} />)}</ul>
        </>
    );
}

const mapStateToProps = state => ( { todos: state } );
const mapDispatchToProps = dispatch => ( { addTodo: text => dispatch(actionCreators.addTodo(text)) } );

// connect( state argument, dispatch argument )
// 1. state( redux store, component props ) OR null
// 2. dispatch( dispatch, component props )

// ES6 currying
export default connect(mapStateToProps, mapDispatchToProps)(Home);