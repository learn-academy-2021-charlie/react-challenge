import React, { Component } from "react"
import './App.css';
import List from "./components/List"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryItems: ["Apple", "Banana", "Chicken", "Soda"], 
      itemPrices: [1.00, 1.30, 4.00, 2.00],
      cart: [],
      priceTotal: 0
    }
  }

  addItem = (item, index) => {
    this.setState({cart: [...this.state.cart, item] })
    this.setState({priceTotal: this.state.priceTotal + this.state.itemPrices[index]})
  }



  render() {
    return(
       <>
          <h1>Grocery items</h1>
          <ul>
              <List
                groceryItems = {this.state.groceryItems}
                itemPrices = {this.state.itemPrices}
                addItem ={this.addItem}
              /> 
              <h2>Cart</h2>
              {this.state.cart.map(value =>{
                return <>
                <li>{value}</li>
                </>
              })}


          </ul>
            <p>Price total:</p>
            <p>{this.state.priceTotal}</p>
            
      </>
    )
  }
}
  
  
  
  
  
  

export default App;
