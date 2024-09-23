import React, { useState, useEffect } from "react";


function CounterHook () {

    // setup state...inside a functional component!
    const [ count, setCount ] = useState(0);



    // Method to handle button click
    const handleIncrement = (event) => {
        // cancel default behavior...
        event.preventDefault();

        
        console.log(event)
        setCount(count + 1);
    };


    // Lifecycle events..componentDidMount
    useEffect(function () {
        console.log(`Hook =====> mounted..`)
    }, [])


    // Lifecycle events..componentDidUpdate (count updated..)
    useEffect(function () {
        console.log(`Hook =====> updated..`)
    }, [count])
   


    return (
        <div>
            <h1>Hooks Counter</h1>
            {/* Adding button and linking it to the handleIncrement method */}
            <button
                onClick={ handleIncrement }
                className="btn btn-danger btn-lg"
            >
                Increment
            </button>

            <span className="badge badge-primary m-10" style={{ paddingLeft: 10 }}>
                 { count }
            </span>
        </div>
    );
    


}

export default CounterHook;
