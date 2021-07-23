import React, { Component} from 'react'
import './App.css'
import Food from './components/Food'
import GroceryList from './components/GroceryList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: ["Pasta $2.00", "Beef Taco $2.00", "Cheeseburger $2.45", "Pizza $3.75", "Milk $2.00"],
      toiletries: ["Toilet Paper $3.00", "Body Wash $4.15", "Shampoo $3.19", "Conditioner $4.19", "Toothpaste $4.99", "Tooth Brush $2.00"],
      groceryList: [
        {name: "pasta", price: 2},
        {name: "taco", price: 2.15},
        {name: "pizza", price: 3.75}
      ],
      officeSupplies: ["Paper $2.15", "Scissors $1.50", "Rim of Sheets $9.00", "Post It Notes $3.99", "Pen $1.00"],
      selectItems: [],
      total: 0
    }
  }

  addItem = (item) => {
    this.setState(
      { selectItems: [...this.state.selectItems, item] }
    )
  }

  total = (itemName, itemPrice) => {
    this.addItem(itemName)
    this.setState(
      {total: this.state.total + itemPrice}
    )
  }

  render(){
    return(
      <>
        
        <h1>Grocery Shopping</h1> 
        
        <h3>Food Items</h3>
          <Food items = {this.state.food} addItem={this.addItem} allItems={this.state.groceryList}/>
        
        <h3>Toiletries</h3>
          <Food items = {this.state.toiletries} addItem={this.addItem}/>
        
        <h3>Office Supplies</h3>
        <Food items = {this.state.officeSupplies} addItem={this.addItem}/>
               
        <h3>More</h3>
        <GroceryList items={this.state.groceryList} total={this.total}/>

        <h2>Food in Cart</h2>
        <h4>Total: {this.state.total}</h4>
        <ul>
          { this.state.selectItems.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>

      </>
    )
  }
}
export default App
