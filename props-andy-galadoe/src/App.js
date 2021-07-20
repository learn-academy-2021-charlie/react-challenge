import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from'./components/Rolls'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      rollSum: 0

    }
  }

   // rollsGen = () => {
   //   let randomNum = Math.floor(Math.random() * 6)
   //   this.setState({count: randomNum})
   // }

   diceRoll = () => {
       let rolls = Math.floor(Math.random() * 6) + 1;
       this.setState({rollSum: rolls})
     }


  render(){
    return(
      <>
        <button onClick = {this.diceRoll}>Click Me!</button>
      <Dice rollSum = {this.state.rollSum}/>
      </>
    )
  }
}

export default App
