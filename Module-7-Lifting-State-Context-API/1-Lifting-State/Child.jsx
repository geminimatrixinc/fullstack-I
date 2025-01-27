import React, { useState } from 'react';

const Child = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
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

export default Child;
