
import './App.css';
import { Component } from 'react';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import MichaelJacksonRobot from './components/MichaelJacksonBot';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "Hello World!"
    }
  }

  render(){
    return (
      <div className="App">
       <h1>Input Challenge</h1>
       <h2>{this.state.userInput}</h2>
       <input type="text"></input>
       <h2>Good Robot</h2>
        <GoodRobot inputToBeTranslated = {this.state.userInput}/>
       <h2>Bad Robot</h2>
        <BadRobot/>
       <h2>Michael Jackson Robot</h2>
       <MichaelJacksonRobot/>
      </div>
    );
  }

}

export default App;
