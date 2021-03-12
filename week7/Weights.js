import React, {useState} from "react";
// Imports the CSS file
import "./App.css"

function Weights()
{
    // This sets the variable (reps) and the function (setReps). useState sets the variable to 0
    const [reps, setReps] = useState(0);

    // The first button adds 1 to the weight lift reps counter
    // The second button resets the weight lift counter to 0
    return(
        <div>
            <h2>Reps of Weight Lifts: {reps}</h2>
            <button onClick = {() => setReps(reps + 1)}>Weight Lift Rep</button>
            <button onClick = {() => setReps(0)}>Reset Counter</button>
        </div>
    )
}

export default Weights;
