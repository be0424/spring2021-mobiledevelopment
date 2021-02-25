// Imports the Jogging file
import Jogging from "./components/Jogging"
// Imports the Weights file
import Weights from "./components/Weights"

function App() 
{
  // Using the <Jogging/> and <Weights/> puts the info from the respective file in that place

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <Jogging/>
      <Weights/>
    </div>

  );
}

export default App;
