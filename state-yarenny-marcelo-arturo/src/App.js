import React, { Component } from 'react'
// The main css file is called App.css, it is imported to App.js here
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        backgroundColor : ["green", "blue", "yellow", "red", "purple", "orange"],
        currentColor: "green"

    }
  }
   colorChange = () => { 
    //  const {backgroundColor} = this.state
    // this.setState({currectColor: this.state.backgroundColor})
    this.setState({currentColor: this.state.backgroundColor[Math.floor(Math.random() * 5)]})
  }

    
  render() {
    return (
      <>
        <h1>Colored square</h1>
        <button onClick={this.colorChange} style={{backgroundColor: this.state.currentColor}}> {this.state.currentColor}</button>
        

      </>
    )
  }
}

export default App;

