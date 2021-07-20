import React, { Component } from 'react'


class DiceLog extends Component {
  render() {

    return (
        <div>
      <p>Result: {this.state.randomNum}</p>
      </div>
    )
  }
}
export default DiceLog