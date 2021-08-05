import './App.css';
import React, { Component } from 'react'

class DiceRoller extends Component{
  render(){
    return(
      <div><h1>Dice Roller</h1>
      
      <div class="float-container">
      
      <div class="float-child1">Dice 
      
      <div class="dice"></div>
      <p>Click Box to Roll</p>
      </div>
      
      <div class="float-child2">Rolls</div>
    
      </div>
  </div>
    )
  }
}

export default DiceRoller;
