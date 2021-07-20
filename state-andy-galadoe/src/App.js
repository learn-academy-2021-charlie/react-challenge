
import React, { Component } from 'react'
import Square from './Square'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <>
        <h1>React State</h1>
        <Square />
      </>
    )
  }
}

export default App
