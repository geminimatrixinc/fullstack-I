
import React from "react";

export function MyComponent () {

    const handleClick = () => { 
        debugger
        alert ('Hello React!') 
    }

   function buildMessage () {
   //return props.message + "  " + props.firstName + " " + props.lastName
   return `${props.message} ${prop.firstName} ${props.lastName}`;
   }



    return <>
        <h1>Hello React!</h1>
        <button onClick={handleClick}>{ buildMessage() }</button>
    </>;
}

