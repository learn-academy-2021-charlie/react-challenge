import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: ["green", "blue", "red", "orange"],
      selectedAnswer: ""
    }
  }
  diffColor = () => {
    var randomNum = this.state.color[Math.floor(Math.random()*this.state.color)]
    this.setState({selectedAnswer: this.state.color[randomNum]})
  }
  render(){
    return (
      <div>
        <h1>Colorbox Challenge</h1>
        <button className="square" onClick={this.diffColor}>{this.state.selectedAnswer}</button>
      </div>
    )
  }
}

export default App;
