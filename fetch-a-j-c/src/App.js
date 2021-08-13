import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
  return(
    <>
    <h1> Test </h1>
    <p>ajdfka</p>
    </>
  )
  }
}

fetch("https://ipapi.co/json/")
  .then(response => {
    return response.json()
  })
  .then(payload => {
    console.log(payload.json())
  })

export default App;
