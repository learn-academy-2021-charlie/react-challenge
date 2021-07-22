
import './App.css';
import React, {Component} from 'react'
import List from './components/List';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [
        {item: "apple", price: 2.49}, 
        {item:"banana", price: .89}, 
        {item:"steak", price: 24.50}, 
        {item:"pork", price: 9.00}, 
        {item:"noodles", price: .10}, 
        {item:"candy", price: 4.50}, 
        {item:"ice cream", price: 4.00}
    ], 
    cart:[]
    }
  }
  addItemToList = (item) => {
    console.log(this.state.cart)
    this.setState({cart:[...this.state.cart, item]})
  }
  render(){
    return(
      <>
    <List addItemToList = {this.addItemToList} inventory = {this.state.inventory}/>
      <ShoppingCart cart = {this.state.cart}/>
      </>
    )
  }
}

export default App;
