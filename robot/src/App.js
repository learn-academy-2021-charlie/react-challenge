import './App.css';
import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot5000 from './components/KanyeBot5000'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }
  onChange = () => {
    this.setState({userInput:event.target.value})
  }
  render(){
    return(
      <>
        <h1>Robo Active Listening</h1>
        <label>say something</label>
        <input type = "text" onChange = {this.onChange}></input>
        <GoodRobot/>
        <BadRobot/>
        <KanyeBot5000/>
      </>
    )
  }
}

export default App;
