import React, {Component} from 'react'

class Dice extends Component{
  render(){
    return(
      <>
        <h2>Dice</h2>
        <div onClick={this.props.handleClick}>
        {this.props.currentRoll}
        </div>
      </>

    )
  }
}

export default Dice;
