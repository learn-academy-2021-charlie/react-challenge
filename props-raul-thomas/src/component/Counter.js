import React,{Component} from 'react';
import DiceRoll from './DiceRoll';

class Counter extends DiceRoll{
  constructor(props){
    super (props)
  }
  render(){
  return (
  <>
  
  <p>
  {this.state.selectedAnswer}

  </p>
  
  </>
    )
  }
}

export default Counter;