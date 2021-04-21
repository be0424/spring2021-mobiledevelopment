import React from "react";

function Jogging(props)
{
    // The first button adds 1 to the weight lift reps counter
    // The second button resets the weight lift counter to 0
    return(
        <div>
            <h2>Miles Jogged: {props.state.jogging}</h2>
            <button onClick = {() => props.dispatch({"type": "increment2"})}>Mile Jogged</button>
            <button onClick = {() => props.dispatch({"type": "decrement2"})}>Remove Mile </button>
        </div>
    )
}

export default Jogging;
