import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import List from './component/List';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      grocery: ["apple", "orange", "chips", "monster"],
      money: [0.50, 0.60, 1.25, 3.00],
      cart:[],
      count: 0,
//////////
products: [
  {item: 'Apple', count: 0, price:1 },
  {item: 'Orange', count: 0, price:5 },
  {item: 'Chips', count: 0, price:10 }
]

    }
  }
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? {...product, count: val} : product
      ))
    })
  }
///////////


  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }
  addCount = (item) => {
    this.setState({count:this.state.count + 1})
  }

  

formatCount = () =>{
  const {count} = this.state;
  return count === 0 ? 'Zero' : count;
}



  render() {
    return (
      <>
        <h1>Quickie Market</h1>
        <h3>grocery</h3>
        <List  cartItem={this.state.grocery}
        addItem={ this.addItem} />
        <h3>money</h3>
        <List cartItem={this.state.money}
        addItem={ this.addCount} />
        <h3>Cart</h3>
        <h4>Total:${this.formatCount()}</h4>
          <ul>
          {this.state.cart.map(value => {
            return <li>{value}</li>
          })}
        </ul>

{/* //////// */}          
        <ProductList products={this.state.products} onChange={this.onChange} />
        <Total products={this.state.products} />

  {/* //////////// */}
      </>
    )
  }
}
 
//////////////////////
const ProductList = ({ products, onChange }) => (
  <ul>
    {products.map((product, i) => (
      <li key={i}>
        {product.title}
        <input 
          type="text" 
          value={product.count}
          onChange={e => onChange(i, parseInt(e.target.value) || 0)}
        />
      </li>
    ))}
  </ul>
);
const Total = ({ products }) => (
  <h3>
    Price: 
    {products.reduce((sum, i) => (
      sum += i.count * i.price
    ), 0)}
  </h3>
)
export default App;
