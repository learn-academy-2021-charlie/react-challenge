import React, { Component } from 'react'
import Square from './Square'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        colorArray : ["green", "blue", "yellow", "red", "purple", "orange"],
        selectColor: " "
    }
}
  

  render() {

    return (
      <div>

        <Square/>
      </div>
    )
  }

}
export default App