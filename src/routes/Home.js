import React, { useState } from 'react';

function Home() {
    const [text, setText] = useState("");
    const onChange = event => setText( event.target.value );
    const onSubmit = event => {
        event.preventDefault();
        setText("");
    };
    return (
        <>
            <h1>TO DOS</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} placeholder="Write to do " />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
}

export default Home;