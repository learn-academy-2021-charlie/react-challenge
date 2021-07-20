import React, { Component } from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      color: "white"
    }
  }
  boxClick = (e) => {
    this.setState ({
      color: "red"
    }) 
    
  }
  render(){
    return ( 
      <div className="boxClickCss" style={{backgroundColor: this.state.color}}onClick={this.boxClick}><p>color: {this.state.color} </p></div>
      
      
      
    )
  }
}

export default App
