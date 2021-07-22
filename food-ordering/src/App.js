import React, { Component } from 'react'
import Items from './components/Items'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodItems: ["Apple: .5","Steak: 10", "Blooming Onion: 5"],
      cart: []
    }
  }

  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }

  render() {
    return (
      <>
      <h1>Food Items</h1>
      <h2>Select from the following food items:</h2>
        <Items 
          cartItems={this.state.foodItems}
          addItem={this.addItem}
        />
      <h2>Cart</h2>
      <ul>
        {this.state.cart.map(value => {
          return <li>{value}</li>
        })}
      </ul>
      </>
    )
  }
}

export default App;
