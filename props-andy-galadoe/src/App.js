import React, { Component } from 'react'
import Dice from './components/Dice'
import './App.css'
import Rolls from'./components/Rolls'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
      <>
      <Dice />        
      <p>Dice Roller</p>
      </>
    )
  }
}

export default App