import './App.css';
import { Component, useImperativeHandle } from 'react';
import Rolls from './Rolls';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dice: [1,2,3,4,5,6],
      currentDice: 0
    }
  }
  handleDice = () => {
    let nextDice = Math.floor(Math.random() * this.state.dice.length)
    this.setState({currentDice: nextDice})
  }

  
  render(){
    return(
    <>
      <h1>Dice Roller game</h1>
      <Rolls spiderman = {this.handleDice} superman = {this.state.currentDice}/>
    </>
    )
  }
}
export default App;

