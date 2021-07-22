
import './App.css';
import React, {Component} from 'react'
import List from './components/List';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [
        {item: "apple", price: '2.49'},
        {item:"banana", price: '.89'},
        {item:"steak", price: '24.50'},
        {item:"pork", price: '9.00'},
        {item:"noodles", price: '.10'},
        {item:"candy", price: '4.50'},
        {item:"ice cream", price: '4.00'}
      ],
      cart:[],
      total: 0,
      totalWithTax: 0
    }
  }
  addItemToList = (item) => {
    let taxPercentage = 7.75
    let total = 0
    for(let i=0; i<this.state.cart.length; i++){
      total = total + parseFloat(this.state.cart[i].price)
    }
    total = (total + parseFloat(item.price)).toFixed(2)
    let totalWithTax = (total * (1 + taxPercentage/100)).toFixed(2)
    this.setState({
      cart:[...this.state.cart, item],
      total: total,
      totalWithTax: totalWithTax
    })
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.total !== prevProps.total) {
      this.fetchData(this.props.total);
  }
}
  render(){
    return(
      <div id='container'>
        <List id='inventory' addItemToList = {this.addItemToList} inventory = {this.state.inventory}/>
        <ShoppingCart id='cart' cart = {this.state.cart}/>
        <h2>Your total before tax: ${this.state.total}</h2>
        <h2>After tax: ${this.state.totalWithTax}</h2>
      </div>
    )
  }
}

export default App;
