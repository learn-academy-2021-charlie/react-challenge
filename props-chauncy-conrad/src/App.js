import Dice from './components/Dice'
import Roll from './components/Roll'
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      diceArray: [1, 2, 3, 4, 5, 6],
      currentRoll: 0
    }
  }
  rollDice = () => {
    let randomNum = Math.floor(Math.random() * this.state.diceArray.length)
    this.setState({currentRoll: randomNum})
  }

  render() {
    return (
      <>
        <Roll
          roll={this.state.diceArray[this.state.currentRoll]}
        />
        <Dice 
          roll={this.state.diceArray[this.state.currentRoll]}
          rollDice = {this.rollDice}
        />
      </>
    )
  }
}

export default App;
