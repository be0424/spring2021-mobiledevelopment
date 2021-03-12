import React, { Component } from 'react';
// Imports the CSS file
import "./App.css"

class Message extends Component
{
    constructor(props)
    {
        super(props);
        this.message = this.message.bind(this);
    }

    message()
    {
        // Changes the empty text of the <p> tag in return
        document.getElementById("hidden").innerHTML = "That's too much exercise!"
    }

    render ()
    {
        // The message will appear in the <p> tag
        return(
        <>
            <p id = "hidden"></p>
            <button onClick = {this.message}>Click here to Print a Message!</button>
        </>
        );
    }
    
}

export default Message;