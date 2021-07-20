import React, { Component } from 'react'
import '../App.css';

// Log displays a roll
//

class Log extends Component {

  render(){
    return (
      <>
      <p> {this.props.roll} </p>
      </>
    )
  }
}


export default Log;
