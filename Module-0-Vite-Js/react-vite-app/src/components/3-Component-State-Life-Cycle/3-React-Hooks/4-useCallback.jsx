import React, { useState, useCallback } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // useCallback ensures the increment function is only recreated if `count` changes
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);  // Empty dependency array means this function won't be recreated unless dependencies change

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);  // Empty dependency array means this function won't be recreated unless dependencies change

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
