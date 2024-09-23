import React from "react";

class Counter extends React.Component {
    
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };

    render() {
        return (
            <>
                <span className="badge badge-primary m-2">
                    { this.formatCount() }
                </span>
               <button className="btn btn-success mt-2">
                    Click Me
                </button>
            </>
        );
    }
    // method..
    formatCount() {
        // use destructoring to re-assign the count ===> state
        const { count } = this.state;

        // assigning JSX to variable
        // const zeroHeaderFragment = <h1>Zero</h1>;

        // const resultFragment = count === 0 ? zeroHeaderFragment : count;

        // return resultFragment;

        //this.state.count = 100;

        return count === 0  ? <p>Zero</p> : count;
    }
}

export default Counter;
