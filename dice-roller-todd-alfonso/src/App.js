import './App.css';
import Rolls from './components/Rolls.js'
import Dice from './components/Dice.js'
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 0,
      resultsList: []
    }

  }

  rollDice = () => {
    console.log("rolling dice")
    //generate a random number
    const randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber);
    this.setState({result: randomNumber})
    

  }

  render() {
    console.log("current number:",this.state.result)
    return (
  
    <div className = "App">
       <h1>Dice Roller</h1>
       <h2>Rolls some dice</h2>
       <Rolls/>
       <Dice  diceFunction = {this.rollDice}  />

    </div>
  );
}
}

export default App;
 