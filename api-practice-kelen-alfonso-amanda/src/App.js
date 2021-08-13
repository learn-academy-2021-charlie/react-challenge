
import './App.scss';
import React, { Component } from 'react'
import photos from './photos.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasaPhotos: photos,
      randomNumber: -1
    }
  }


  url = "https://api.nasa.gov/planetary/apod?count=100&api_key=DEMO_KEY"


  getRandomNumber = () =>{
    const randomNumber = Math.floor(Math.random() * this.state.nasaPhotos.length)
    this.setState({randomNumber})
  }



   render() {
     console.log(this.state.nasaPhotos[this.state.randomNumber])
     return (
       <>
        <h1>Random APOD Image</h1>
        <button onClick={this.getRandomNumber}>Click Me ({this.state.randomNumber})</button>
        {this.state.randomNumber !== -1 && <img src={this.state.nasaPhotos[this.state.randomNumber].hdurl}/>}
       </>
     )
   }
 }
 
export default App
