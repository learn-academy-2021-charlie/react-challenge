import React, { Component } from "react";
import GroceryItems from './GroceryItems'

export default class Store extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.stores.map((value) => {
            return (
              <>
                <li>{value}</li>
                <GroceryItems items={this.props.groceryItemsList} addToCart={this.props.addToCart}/>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
