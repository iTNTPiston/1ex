import React from 'react';
import logo from './logo.svg';
import shrine from './img/shrine.png';
import './App.css';
import { InstructionData } from './route/engine';
import { Instruction, InstructionTable } from './render';
import {mainConfig} from './route/config';
import {computeInstruction} from './route/engine';



class App extends React.Component {
  render(){


  const inst = computeInstruction(mainConfig);
  return <>
  <div className="fixed-header">
    <input type="text" placeholder="WIP"></input>
    <button >&gt;</button>
    <button >X</button>
  </div>
  <InstructionTable instructions={inst} directionMode="clock"/>
  </>
  }
}


export default App;
