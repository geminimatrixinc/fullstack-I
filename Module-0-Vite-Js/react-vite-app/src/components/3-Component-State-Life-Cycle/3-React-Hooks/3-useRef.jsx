import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef < HTMLInputElement > (null);

    useEffect(() => {
        // Automatically focus the input when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <h1>Focus on Input Example</h1>
            <input ref={inputRef} type="text" placeholder="I am focused automatically!" />
        </div>
    );
};

export default FocusInput;
