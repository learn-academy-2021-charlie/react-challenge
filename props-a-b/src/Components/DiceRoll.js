import React, { Component } from 'react'


class DiceRoll extends Component {
  render() {
      console.log(this.props)
    return (
      <>
      <div id={`${this.props.side}`}>
          <h1 class="numberBox" onClick={this.props.handleDiceRoll}>{this.props.side}</h1>
          <h2 onClick>Result:  {this.props.side}</h2>
      </div>
      </>
    )
  }
}
export default DiceRoll