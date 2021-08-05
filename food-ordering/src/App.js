import React, { Component } from 'react'
import Items from './components/Items'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: {
        apples: ['apples', .5],
        pineapple: ['pineapple', 10],
        cheese: ['cheese', 100]
      },
      foodItems: ["Apple: .5","Steak: 10", "Blooming Onion: 5"],
      cart: [],
      totalPrice: 0,
      salesTaxPrice: 0
    }
  }

  addItem = (item, price) => {
    this.addPrice(price)
    this.setState({cart: [...this.state.cart, item]})
  }
  addPrice = (price) => {
      const salesTax = .08
      this.state.salesTaxPrice += price + (price * salesTax)
      return this.state.totalPrice += price;
  }

  render() {
    return (
      <>
      <h1>Food Items</h1>
      <h2>Select from the following food items:</h2>
        <Items 
          cartItems={this.state.food}
          addItem={this.addItem}
          calcPrice={this.addPrice}
        />
      <h2>Cart</h2>
      <ul>
        {this.state.cart.map(value => {
          return <li>{value}</li>
        })}
      </ul>
      <h3>Total Price: {this.state.totalPrice} </h3>
      <h3>Total Price with Governments cut: {this.state.salesTaxPrice.toFixed(2)} </h3>
      </>
    )
  }
}

export default App;
