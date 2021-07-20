import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "yellow"
    }
  }

  render(){
    return (
      <>
        <h1>Color Box</h1>
        <p style={{color:"green"}}>This is a paragraph.</p>
        
      </>
    )
  }
}


export default App;
