import React, { Component } from 'react';
import './App.css';


class App extends Component {
constructor(){
  super()
  this.state = {
    ip: "empty",
    currentLocation: ""
  }
}

getIp = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => this.setState({ip: payload.ip,
  currentLocation: payload.city}))
}

  render() {
    return (
      <>
        <h1> Find your IP </h1>
        <button onClick={this.getIp}> Click </button>
        <p> This is the IP: {this.state.ip} </p>
        <p> This is the city for the IP: {this.state.currentLocation} </p>
      </>
    );
  }
}



export default App;
