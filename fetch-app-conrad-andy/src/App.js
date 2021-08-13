import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response =>  response.json())
    .then(payload => this.setState({ip: payload}))
  }

  render() {
    console.log("state:", this.state.ip)
    return (
      <>
      <h1>Find Your IP Address</h1>
      <button  onClick={this.getIP} >Click me!</button>
      <p>Your Ip Address: {this.state.ip.ip}</p>
      </>
    )
  }

}

export default App;
