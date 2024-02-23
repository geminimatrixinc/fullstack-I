import './App.css';

import React, { useState } from 'react';

const App = () => {

    // initialize 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleOnClick = (e) => {
        console.log(e.target.value)
        alert('clicked')
    }

    function handleInputChange (e) {
        setName(e.target.value);
        console.log(`input changed..${ e.target.value }`)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        console.log(`input changed..${e.target.value}`)
    }

    const handleSubmit = (e) => {
        // prevent the form from reload ==> post back
         e.preventDefault();
        alert(`Name: ${name}\n Email: ${email}`);

        // call the backend..>>> POST >> server
    }
  return (
    <div className="App">
        <h1>React Input Events and Forms</h1>
        <form onSubmit={ handleSubmit }>
            <label> 
                    Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
            </label>
            <br />
            <br />
            <button 
                type="submit">
                    Submit
            </button>
        </form>
        <h2>
           Name:  { name }!
           Email: { email }
        </h2>
    </div>
  );
}

export default App;
