import React, { Component } from 'react'
import '../App.css';

// Dice is represented by a square and has the current roll.
// app passes down the prop for the roll number and dice displays it.
// when p is clicked the prop nextRoll is handled, which is a method call to die roller
//


class Dice extends Component {

  render(){
    return (
      <>
      <h2 onClick={ this.props.nextRoll }>
        { this.props.roll }
      </h2>
      </>
    )
  }
}


export default Dice;
