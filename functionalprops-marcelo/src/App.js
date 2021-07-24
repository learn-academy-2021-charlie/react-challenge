import React, { Component } from 'react';
import List from './components/List';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      itemList: [
        {
        name: 'apple',
        price: 2
      }, {
        name: 'banana',
        price: 1
      }, {
        name: 'coffee',
        price: 3
      }
      ],
      cart: ['test']
    }
  }

  addToCart = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }


  render() {
    let listStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
    return (
      <>
        <List 
        style={listStyle} 
        itemList={this.state.itemList}
        addToCart={this.addToCart}/>
        <h2>cart</h2>
         <ul>
          {this.state.cart.map((value, index) =>{
            return <li key={index}> {value} </li>
          })}
          
        </ul>
      </>
    );
  }
}

export default App;