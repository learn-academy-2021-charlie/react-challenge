import React, { Component } from "react"
import './App.css';
import nasa from './nasa'
class App extends Component {
  constructor(){
    super()

    this.state = {
      ip: "",
      nasa: ""

    }
  }

// componentDidMount = () =>{
//   fetch("https://ipapi.co/json/") //fetches from ipapi API
//   .then((response) => response.json()) //return info in json
//   .then((payload) => this.setState({ip: payload})) //changes our ip state object
// }


getIP = () =>{
fetch("https://ipapi.co/json/") //fetches from ipapi API
.then((response) => response.json()) //return info in json
.then((payload) => this.setState({ip: payload})) //changes our ip state object



}
 
nasaFetch = () =>{

  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //fetches from ipapi API
  .then((response) => response.json()) //return info in json
  .then((payload) => this.setState({nasa: payload})) //changes our ip state object
  .catch(errors => console.log('error:', errors))
  
  
}

  render(){
  return (
    <div className="App">
      <button onClick={this.getIP}>api</button>
      <p>ip: {this.state.ip.ip}</p>
      <p>city:{this.state.ip.city}</p>
      <p>county:{this.state.ip.country}</p>

      <button onClick={this.nasaFetch}>nasa fetch</button>
      <p>nasa:{this.state.nasa.explanation}</p>
      <p>title:{this.state.nasa.title}</p>
    </div>
  );
}
}

export default App;
