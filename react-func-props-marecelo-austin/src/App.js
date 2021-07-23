import React, { Component } from 'react'
import Store from './components/Store'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      groceryItemsList : [
        {
          food: "Apple",
          price: 2
        },
        {
          food: "Pizza",
          price: 8
        },
        {
          food: "Chicken",
          price: 9
        },
        {
          food: "Bread",
          price: 3
        },
      ],
      stores: ["Ralphs", "HEB", "Trader Joes", "Winco", "Walmart"],
      cart: []
    }
  }
  addToCart = (value) => {
    console.log("success");
    console.log(value);
    let tempCart = [...this.state.cart, value]
    this.setState({cart: tempCart})
  }

  handleClick=(e)=>{
    console.log(e.target);
  }
  render() {
    console.log(this.state.cart);
    return (
      <div>
        <Store 
          stores={this.state.stores} 
          groceryItemsList={this.state.groceryItemsList}
          addToCart = {this.addToCart}
          />
        <button onClick={this.handleClick}> BIGGER BUTTON </button>
      </div>
    )
  }
}
