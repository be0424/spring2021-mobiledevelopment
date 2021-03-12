import React, {Component} from "react"
// Imports the CSS file
import "./App.css"

class Days extends Component
{
    constructor(props)
    {
        super(props)
        // Sets days to 0 by deafult
        this.state = {
            days: 0
        }
    }

    render()
    {
        // The first button adds 1 to the days exercised counter
        // The second button resets the counter to 0
        return(
            <div>
                <h2>Days Exercised: {this.state.days}</h2>
                <button onClick = {() => this.setState({days: this.state.days + 1})}>Day Exercised</button>
                <button onClick = {() => this.setState({days: 0})}>Reset Counter</button>
            </div>
        )
    }

}

export default Days;