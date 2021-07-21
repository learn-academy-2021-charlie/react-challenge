import React,{Component} from 'react';
import DiceRoll from './DiceRoll';

class Counter extends Component{
  constructor(props){
    super (props)
  }
  render(){
  return (
  <>
  
  <p>
  {this.props.count} 

  </p>
  
  </>
    )
  }
}

export default Counter;