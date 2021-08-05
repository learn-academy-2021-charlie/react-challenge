import './App.css';
import React, { Component } from 'react'
import FoodList from './components/FoodList' 

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      foodList: ["banana $1", "water $2", "apples $7", "oranges $9"],
      cart: []
    }
  }
  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }
  render(){
    return(
      <>
        <h1>Food App</h1>
        <h2>List of foods</h2>
        <FoodList
          cartItem={this.state.foodList}
          addItem={this.addItem}
        />
      </>
    )
  }
}


export default App;
