import React from "react";

function Weights(props)
{
    // The first button adds 1 to the weight lift reps counter
    // The second button resets the weight lift counter to 0
    return(
        <div>
            <h2>Reps of Weight Lifts: {props.state.reps}</h2>
            <button onClick = {() => props.dispatch({"type": "increment1"})}>Weight Lift Rep</button>
            <button onClick = {() => props.dispatch({"type" : "decrement1"})}>Remove Rep</button>
        </div>
    )
}

export default Weights;
