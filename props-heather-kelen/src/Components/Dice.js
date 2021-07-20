import React, {Component} from 'react'

class Dice extends Component{
  render(){
    return(
      <>
        <div id='diceBox'>
          <h2>Dice</h2>
          <div id='rollButton' onClick={this.props.handleClick}>
          {this.props.currentRoll}
          </div>
        </div>
      </>

    )
  }
}

export default Dice;
