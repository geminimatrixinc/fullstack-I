import React, { useRef } from 'react';

// Uncontrolled components rely on the DOM to store form data. They use refs to access the form values.

const UncontrolledComponentExample = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input Value: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{marginLeft:25}}>
                <input
                    type="text"
                    ref={inputRef}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledComponentExample;