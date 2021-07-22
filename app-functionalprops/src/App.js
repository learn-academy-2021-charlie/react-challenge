import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import List from './component/List';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      grocery: ["apple", "orange", "chips", "monster"],
      money: ["$.50", "$.60", "$1.25", "$3.00"],
      cart:[]
    }
  }
  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }
  render() {
    return (
      <>
        <h1>qucik Market</h1>
        <h3>grocery</h3>
        <List cartItem={this.state.grocery}
        addItem={ this.addItem} />
        <h3>money</h3>
        <List cartItem={this.state.money}
        addItem={ this.addItem} />
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
