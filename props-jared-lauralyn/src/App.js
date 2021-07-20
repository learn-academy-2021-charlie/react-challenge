import React, { Component } from 'react'
import './App.css';
import Dice from './components/Dice.js'
import Log from './components/Log.js'

class App extends Component {
  constructor(props) {
    super(props)
    let firstRandNum = this.getRandNum()
    this.state = {
      roll: firstRandNum
    }
  }

  getRandNum = () => {
    return Math.ceil(Math.random() * 6)
  }

  dieRoller = () => {
    this.setState( { roll: this.getRandNum() } )
  }

  render(){
    return (
      <>
      <h1>Dice Roller</h1>

      <Dice roll={this.state.roll} nextRoll={ this.dieRoller }/>

      </>
    )
  }
}


export default App;
