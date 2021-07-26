import React, {Component} from 'react';
import './App.css';
import Goodbot from './Component/Goodbot';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
      
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ userInput: e.target.value })
  }

  render(){
    return(
      <>
        
        <input 
          type="text"
          value={ this.state.userInput }
          onChange={ this.handleChange }
        />
        <p>{ this.state.userInput }</p>
        <Goodbot
       goodBot = {this.state.userInput}
        />
      </>
    )
  }
}

export default App;
