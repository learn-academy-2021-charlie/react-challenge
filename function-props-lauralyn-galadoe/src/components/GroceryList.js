import React, { Component } from 'react'

class GroceryList extends Component {


  render(){
    return(        
      <>
        <ul>
          {this.props.items.map((item, key) => {
            return (
              <li key={key}>
                <button onClick ={ () => this.props.total(item.name, item.price)}>
                {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default GroceryList
