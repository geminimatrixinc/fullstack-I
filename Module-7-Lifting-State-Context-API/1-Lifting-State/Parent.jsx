import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (newMessage) => {
        // PARENT
        debugger
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

export default Parent;
