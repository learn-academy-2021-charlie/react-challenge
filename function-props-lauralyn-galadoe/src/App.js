import React, { Component} from 'react'
import './App.css'
import Food from './components/Food'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: ["Pasta $2.00", "Beef Taco $2.00", "Cheeseburger $2.45", "Pizza $3.75", "Milk $2.00"],
      toiletries: ["Toilet Paper $3.00", "Body Wash $4.15", "Shampoo $3.19", "Conditioner $4.19", "Toothpaste $4.99", "Tooth Brush $2.00"],
      groceryList: {
        pasta: 2,
        taco: 2,
        pizza: 3.75
      },
      officeSupplies: ["Paper $2.15", "Scissors $1.50", "Rim of Sheets $9.00", "Post It Notes $3.99", "Pen $1.00"],
      selectItems: []
    }
  }

  addItem = (item) => {
    this.setState(
      { selectItems: [...this.state.selectItems, item] }
    )
  }

  render(){
    return(
      <>
        <h1>Grocery Shopping</h1>
        
        <h3>Food Items</h3>
          <Food items = {this.state.food} addItem={this.addItem}/>
        
        <h3>Toiletries</h3>
          <Food items = {this.state.toiletries} addItem={this.addItem}/>
        
        <h3>Office Supplies</h3>
        <Food items = {this.state.officeSupplies} addItem={this.addItem}/>
        
        {/* console.log(groceryList.keys()) */}
        
        <h2>Food in Cart</h2>
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
