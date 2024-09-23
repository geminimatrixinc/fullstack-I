// App.js
import React, { useState } from 'react';


const Parent = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>Parent Component</h1>

            <Child onMessageChange={handleMessageChange} />

            <p>Message from Child: {message}</p>
        </div>
    );
};

const Child = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        /// CHILD
        debugger
        setInputValue(e.target.value);
        // parent call back
        props.onMessageChange(e.target.value); // Lifting state up
    };

    return (
        <div>
            <h2>Child Component</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type a message"
            />
        </div>
    );
};

const App = () => {
    return (
        <>
            <Parent />
        </>
    );
};

export default App;
