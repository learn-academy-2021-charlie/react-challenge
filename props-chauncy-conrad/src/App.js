import Dice from './components/Dice'
import Roll from './components/Roll'
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      currentRoll: 1,
      newArray: []
    }
  }
  rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1)
    // let newArray = this.state.newArray.concat(randomNum)
    this.setState({currentRoll: randomNum, newArray: [...this.state.newArray, randomNum]})
        console.log(this.state.newArray)
  }

  render() {
    return (
      <>
      <div className="float-container">
        <Dice 
          roll={this.state.currentRoll}
          rollDice = {this.rollDice}
        />
        <Roll
          roll={this.state.newArray}
        />
      </div>
      </>
    )
  }
}

export default App;
