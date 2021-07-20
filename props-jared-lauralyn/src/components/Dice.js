import React, { Component } from 'react'
import '../App.css';

// Dice is represented by a square and has the current roll.

class Dice extends Component {

  render(){
    return (
      <>
      <h4 onClick={ this.props.nextRoll }>
        { this.props.roll }
      </h4>
      </>
    )
  }
}


export default Dice;
