import React, { Component } from 'react'

class Dice extends Component {
    // super(props)
    // this.state={
    //   numbersArray: [1,2,3,4,5,6],
    //   currentRoll: [1]
    // }
  // diceRoll = () => {
  //   // this.setState({currentRoll: this.state.numbersArray[Math.floor(Math.random()*6)]})
  // }
  render() {
    return(
      <>
        <h1 id="dice" onClick={this.props.diceRoll}>{this.props.currentRoll}</h1>
        <p id="clickBox">Click Box to Roll</p>
      </>
    )
  }
}
export default Dice;
//   }
//   render() {
//     return(
//       <>
//         <h1 id="dice" onClick={this.diceRoll}>{this.state.currentRoll}</h1>
//         <p id="clickBox">Click Box to Roll</p>
//       </>
//     )
//   }
// }
// export default Dice;