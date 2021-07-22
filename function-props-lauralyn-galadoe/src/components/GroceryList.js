import React, { Component } from 'react'

class GroceryList extends Component {


  render(){

    return(
      <>
        <ul>
          {this.props.items.map(([key, value]) => {
            return (
              <li>
                <button onClick ={ () => this.props.addItem(value)}>
                {value}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Food
