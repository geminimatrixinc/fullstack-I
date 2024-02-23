
import React from 'react';

class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        // setup..initializze

        this.state = {
            message: "Hello World! (internal state)"
        }
    }

    changeMessage = () => {
       console.log(`button clicked..changeMessage`);
       // change and update state??

       this.setState(
            {
                message: "Goodbye.."
            }
       );

    }

    render () {
        return <React.Fragment>
                <h1>  { this.state.message }</h1>

                <button onClick={ this.changeMessage }>Change Message</button>
            </React.Fragment>;
    }

}

export default HelloWorld;