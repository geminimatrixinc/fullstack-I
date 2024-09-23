import React from "react";


class CounterState extends React.Component {

    
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        firstName: "",
        lastName: ""
    };

    // Method to handle button click
    handleIncrement = () => {
        // allow for modifying from child component..==> update React state ===> trigger VDOM to update
        this.setState({ 
            count: this.state.count + 1 },
            );
    };

    componentDidMount () {
        console.log(`component mounted..`)
    }

    /// listerner ==> React triggers..
    componentDidUpdate () {
        console.log(`component updated`)
    }

    componentWillUnmount () {
        console.log(`component did unmount`)
    }


    render() {
        return (
            <div>
                <h1>Class Counter</h1>
            
                {/* Adding button and linking it to the handleIncrement method */}
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-danger btn-lg"
                >
                    Increment
                </button>
                <span className="badge badge-primary m-2" style={{ paddingLeft: 10 }}>
                    {this.state.count}
                </span>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state; /// changing ===> user clicked!
        const x = <h1>Zero</h1>;
        return count === 0 ? x : count;
    }
}

export default CounterState;
