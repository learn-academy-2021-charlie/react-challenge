import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: '',
      blahs: '',
    }
  }

  handleChange = (e) => {
    let length = e.target.value.length
    let blah = ''
    blah = 'BLA'.repeat(length/3)
    if(length%3 == 1){blah = blah.concat('B')}
    if(length%3 == 2){blah = blah.concat('BL')}
    this.setState({
      input: e.target.value,
      blahs: blah
    })
  }

  render(){
    return (
      <>
        <input type='text' onChange={this.handleChange}/>
        <div>
          Good Robot: I hear {this.state.input}. Is that correct?
        </div>
        <div>
          Bad Robot: I hear {this.state.blahs}. Is that correct?
        </div>
        <div>
          Deaf Robot: WHAT???
        </div>
      </>
    )
  }
}

export default App;
