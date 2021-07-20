import React, { Component } from 'react'
import Dice from './components/Dice.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      numbersArray: [1,2,3,4,5,6],
      currentRoll: 1,
      rollLog: []
    }
  }
  diceRoll = () => {
    this.setState({currentRoll: this.state.numbersArray[Math.floor(Math.random()*6)]})
  }
  rollLogger = () => {
    this.setState({rollLog:
    [...this.state.rollLog, this.state.currentRoll]})
    console.log(this.state.rollLog)
  }

  render() {
    return(
      <>
        <Dice currentRoll={this.state.currentRoll}/>
        <Dice diceRoll={this.state.diceRoll}/>
        <Dice numbersArray={this.state.numbersArray}/>
        <p>{this.state.rollLog}</p>
      </>
    )
  }
}

export default App;
