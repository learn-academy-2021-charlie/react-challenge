import Dice from './components/Dice'
import Roll from './components/Roll'
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      diceArray: [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    }
  }
  render() {
    return (
      <>
        <Roll/>
        <Dice/>
      </>
    )
  }
}

export default App;
