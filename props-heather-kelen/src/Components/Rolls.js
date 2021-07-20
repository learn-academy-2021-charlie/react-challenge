import React, {Component} from 'react'

class Rolls extends Component{
  render(){
    return(
      <div id='rollsBox'>
        <h2>Rolls</h2>
        {this.props.rolls && this.props.rolls.map((roll)=>{
          return(
            <li className='rollList'>
            {roll}
            </li>
          )
        })}
        <button onClick={this.props.clear}>CLEAR</button>
      </div>
    )
  }
}

export default Rolls;
