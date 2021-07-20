import './App.css';
import Rolls from './components/Rolls.js'
import Dice from './components/Dice.js'
import React, { Component } from 'react';


class App extends Component {
  rollDice = () => {
    console.log("rolling dice")
  }
  render() {
    return (
  
    <div className = "App">
       <h1>Dice Roller</h1>
       <h2>Rolls some dice</h2>
       <Rolls/>
       <Dice  diceFunction = {this.rollDice}  />

    </div>
  );}
}

export default App;
 