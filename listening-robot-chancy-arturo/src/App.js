import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GoodRobot from './component/GoodRobot'
import BadRobot from './component/BadRobot'
import KayneRobot from './component/KayneRobot'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
      badRobotInput: "BLA"
    }
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  render(){
    return(
      <>
        <h1>Robo Active Listening</h1>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <GoodRobot
          userInput={this.state.userInput}
        />
        <BadRobot
          userInput={this.state.userInput}
        />
        <KayneRobot
          userInput={this.state.userInput}
        />
      </>
    )
  }
    
}

export default App;
