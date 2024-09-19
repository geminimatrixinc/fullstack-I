import React from 'react';

// Pass additional arguments to event handlers. 
// This can be done using arrow functions or the bind method.
const ArgumentPassingExample = () => {
    const handleClick = (e, message) => {
        alert(message);
    };

    return (
        <div>
            <button onClick={(event) => handleClick(event, 'Hello World!')}>Click Me</button>
        </div>
    );
};

export default ArgumentPassingExample;
