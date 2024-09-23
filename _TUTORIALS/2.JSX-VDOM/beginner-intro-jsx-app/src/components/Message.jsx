
import { useState } from 'react';

function Message () {

    // message in state..
    const [message, setMessage] = useState("Hello World!");

    const myStyle = { 
        textAlign: "center"
    }

    // 1. event handler
    // 2. track my user input changes ===> fire the event
    // 3. set state and update message, with the value from the text input control
    // 4. controlling the value input control.


    const handleChange = (e) => {
        //console.log(`input changing...`)
        console.log(e.target.value)

        setMessage(`${e.target.value}`)

    }

    return <>
            <div style={ myStyle }>
                <input 
                    type="text" 
                    onChange={ handleChange }
                    value={message} 
                    >
                    </input>

              
            </div>
            <h1>
                { message }
            </h1>
        </>
}

export default Message;