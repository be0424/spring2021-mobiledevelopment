// Imports the Jogging file
import Jogging from "./components/Jogging"
// Imports the Weights file
import Weights from "./components/Weights"
// Imports the Days file
import Days from "./components/Days"
// Imports the CSS file
import "./components/App.css"
// Imports the Message file
import Message from "./components/Message"

function App() 
{
  // Using the <Jogging/> and <Weights/> puts the info from the respective file in that place

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <Jogging/>
      <Weights/>
      <Days/>
      <Message/>
    </div>

  );
}

export default App;
