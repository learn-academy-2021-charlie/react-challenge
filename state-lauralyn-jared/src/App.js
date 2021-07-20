import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["blue", "green", "yellow", "red"],
      color: "brown"
    }
  }

changeColor = () => {
  const {colors} = this.state
  let random = Math.floor (Math.random()* this.state.colors.length)
  this.setState({color:colors[random]})
}

  render(){
    return (
      <>
        <h1>Color Box</h1>
        <div style={{backgroundColor: 'black'}}>
        <p onClick = {this.changeColor} >{this.state.color}</p>
        </div>
      </>
    )
  }
}


export default App;
