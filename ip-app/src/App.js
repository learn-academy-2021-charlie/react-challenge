import { React, Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
      .then(response => console.log(response.json()))
      // .then(payload => this.setState({ip: payload.ip}))
  }

  render() {
    console.log(this.state.ip)
    return (
      <>
        <h1>Your IP address</h1>
        <button onClick={this.getIP}>Click here!</button>
        <p>IP address: {this.state.ip}</p>
      </>
    )
  }
}

export default App;
