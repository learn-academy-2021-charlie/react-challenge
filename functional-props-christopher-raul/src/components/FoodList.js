import React, { Component } from 'react'
// As a user, I can see an application that has a list of food items and the price of each item


class FoodList extends Component{
    render(){
      return(
        <>  
        <ul>
            {this.props.cartItem.map(value => {
                return(
                    <li>
                        <button onClick={() => this.props.addItem(value)}>{value}</button>
                    </li>
                )
            })}
        </ul>
        </>
      )
    }
  }

export default FoodList;