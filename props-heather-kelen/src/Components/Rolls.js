import React, {Component} from 'react'

class Rolls extends Component{
  render(){
    return(
      <>
        <h2>Rolls</h2>
        {this.props.rolls && this.props.rolls.map((roll)=>{
          return(
            <>
              <li>
              {roll}
              </li>
            </>
          )
        })}
        <button onClick={this.props.clear}>CLEAR</button>
      </>
    )
  }
}

export default Rolls;
