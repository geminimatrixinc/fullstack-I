import React, { useState } from 'react';

function CounterFC() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
       setCount(count + 1)
    }
    return <div>
        <h1>Counter FC</h1>
        <p>
            { count }
        </p>
        <button onClick={ () => setCount(count + 1) }>Increment</button>
        </div>
}

export default CounterFC;