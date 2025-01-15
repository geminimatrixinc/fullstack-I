import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval when component unmounts
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <h1>Timer: {time} seconds</h1>
        </div>
    );
};

export default Timer;
