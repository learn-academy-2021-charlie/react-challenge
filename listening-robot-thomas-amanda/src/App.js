import React, { Component } from 'react'
import './App.css';
import BadRobot from './components/BadRobot';
import GoodRobot from './components/GoodRobot'

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      userInput: "",
      badRobotResponse: ""
    }
  }

handleChange = (e) => {
  console.log(e.target.value)
  this.setState({userInput: e.target.value})
}

// badRoboTranslate = (e) => {
//   console.log(e.target.value)
//   this.setState({badRobotResponse: e.target.value})
// }


  render (){
  return (
 <>
 <h1>Listening Robot</h1>
 <input 
  type= "text"
  value = {this.state.userInput}
  onChange={ this.handleChange}/>
  <p>{this.state.userInput}</p>
<GoodRobot
goodResponse ={this.state.userInput}/>
<BadRobot
badResponse= {this.state.userInput} 
/>

 </>
  )
}
}

export default App;
