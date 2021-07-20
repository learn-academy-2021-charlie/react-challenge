import React, { Component } from 'react'
import './App.css';
import Dice from './components/Dice.js'
import Log from './components/Log.js'

// creating the class 'App'
// This is the PARENT component
// The children are Log and Die
// App Component (could be die) is in charge of rolling the die
// passes the roll number as a prop over to log and die to display to the user
//

class App extends Component {
  constructor(props) {
    super(props)
    let firstRandNum = this.getRandNum()
    this.state = {
      log: [firstRandNum],
      roll: firstRandNum
    }
  }

  // create array
  // use .push for array []
  // map that returns each of the values in log and i



  getRandNum = () => {
    return Math.ceil(Math.random() * 6)
  }

  dieRoller = () => {
    let dieDieRoller = this.getRandNum()
    let log = this.state.log
    log.push(dieDieRoller)
    this.setState({roll: dieDieRoller})

  }

// creates a log component for each die roll in the array


  render(){
    return (
      <>
      <h1>Dice Roller</h1>

      <div id = 'diceStyle'>
      <Dice roll={this.state.roll} nextRoll={this.dieRoller}/>
      </div>
      <div>{this.state.log.map(roll =>{
        return <Log roll = {roll}/>
      })}
      </div>

      </>
    )
  }
}

export default App;
