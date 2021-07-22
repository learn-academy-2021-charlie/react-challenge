import React, { Component } from 'react'

class Food extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <>
        <h2>Testing Food</h2>
        <ul>
          {this.props.foodItems.map(value => {
            return (
              <li>
              <button onClick = "">{value}</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Food
