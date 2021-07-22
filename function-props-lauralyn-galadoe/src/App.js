import React, { Component} from 'react'
import './App.css'
import Food from './components/Food'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: ["Pasta $2.00", "Beef Taco $2.00", "Cheeseburger $2.45", "Pizza $3.75"],
      selectFood: []
    }
  }
  render(){
    return(
      <>
        <h1>React Functional Props</h1>
        <Food foodItems = {this.state.food}/>
      </>
    )
  }
}
export default App
