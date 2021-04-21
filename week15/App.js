import './App.css';
import {state, reducer} from "./components/ApplicationState";
import Weights from "./components/Weights";
import Jogging from "./components/Jogging";
import React, { useReducer } from 'react';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Weights state ={currentState} dispatch = {dispatch}/>
        <Jogging state ={currentState} dispatch = {dispatch}/>
      </header>
    </div>
  );
}

export default App;
