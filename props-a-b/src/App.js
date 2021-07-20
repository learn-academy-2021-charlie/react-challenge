import React, { Component } from 'react'
import './App.css'
import DiceRoll from './Components/DiceRoll'
import DiceLog from './Components/DiceLog'

class App extends Component {
  constructor(){
    super()
    this.state={
      sidesArray: [
        1,
        2,
        3,
        4,
        5,
      ],
      currentSide: 1,
    }

  }
  handleDiceRoll = () => {
    let randomNum = Math.floor(Math.random() * this.state.sidesArray.length)
    this.setState({currentSide: randomNum})
  }
  render() {
    return (
      <>
      <DiceRoll 
      side={this.state.sidesArray[this.state.currentSide]}
      handleDiceRoll = {this.handleDiceRoll}
      />
      </>
    )
  }
}


export default App


