import React from 'react';

class Greeting extends React.Component {

   render() {
    return <div>
        <h2> 
           Hello { this.props.message }
        </h2>
    </div>
   }
}

export default Greeting;