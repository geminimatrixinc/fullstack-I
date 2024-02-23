import React from 'react';

function MyComponent() {

    const element = <h1>Hello, World!</h1>
    const link = <a href="https://www.google.com">Visit Google</a>;


    function handleClick() {
        alert('Hello, Clicked!');
    }

    return <div>
        { link }
        { element }
        <button onClick={handleClick} className="">Click Me!</button>
    </div>;
}

export default MyComponent;