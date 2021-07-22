import { Component } from 'react';
import './App.css';
import Order from './Order'
import logo from './logo.png'
// Challenges
// As a user, I can see an application that has a list of food items and the price of each item
// As a user, I can select an item I wish to order
// As a user, I can see the items I have selected displayed on the page
// Stretch Challenges
// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu
//1. Data/props, methods-->App.js 2. Behavior-->Order.js 3. render()--HTML/CSS



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pizza:[{name:"Cheess Pizza",price:12.99}],
      sandwiches:[{name:"Buffalo Chicken",price:9.99}],
      pasta:[{name:"Chicken Alfredo",price:8.99}],
      desserts:[{name:"Cinnamon Bread Twists",price:4.99}],
      drinks:[{name:"Coke",price:1.69}],
      tax: 0.075,
      currentOrder:[]
    }
  }

  addItem = (item) => {
    this.setState({currentOrder:[...this.state.currentOrder,item]})
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Pizza Hut</h1>
        <h2>Pizza</h2>
        <Order 
        orderItem = {this.state.pizza}
        addItem = {this.addItem}
        />
        <h2>Sandwiches</h2>
        <Order 
        orderItem = {this.state.sandwiches}
        addItem = {this.addItem}
        />
        <h2>Pasta</h2>
        <Order 
        orderItem = {this.state.pasta}
        addItem = {this.addItem}
        />
        <h2>Desserts</h2>
        <Order 
        orderItem = {this.state.desserts}
        addItem = {this.addItem}
        />
        <h2>Drinks</h2>
        <Order 
        orderItem = {this.state.drinks}
        addItem = {this.addItem}
        />
        <h2>Order</h2>
        <ul>{this.state.currentOrder.map(value => {return <li>{`${value.name},$ ${value.price}`}</li>})}</ul>
        <h2>$ {this.state.currentOrder.length > 0 && this.state.currentOrder.reduce((total,orderItem) => {return total + orderItem.price},0)}</h2> 
        <h3>California tax {this.state.tax}</h3>
        <h2>Total { this.state.currentOrder.length > 0 && (this.state.currentOrder.reduce((total,orderItem) => {return total + orderItem.price},0) * (1 + this.state.tax)).toFixed(2)}</h2>
      </div>
    )}
  }

export default App;
