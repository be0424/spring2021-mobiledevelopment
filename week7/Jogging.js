import React, {Component} from "react"
// Imports the CSS file
import "./App.css"

class Jogging extends Component
{
    constructor(props)
    {
        super(props);
        // Sets miles to 0 by default
        this.state = {
            miles: 0
        }
    }

    render()
    {
        // The first button adds 1 to the miles jogged counter
        // The second button resets the counter to 0
        return(
            <div>
                <h2>Miles Jogged: {this.state.miles}</h2>
                <button onClick = {() => this.setState({miles: this.state.miles + 1})}>Mile Jogged</button>
                <button onClick = {() => this.setState({miles: 0})}>Reset Counter</button>
            </div>
        )
    }
}

export default Jogging;
