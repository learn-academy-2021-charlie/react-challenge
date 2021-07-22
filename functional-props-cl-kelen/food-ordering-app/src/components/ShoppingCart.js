import React, {Component} from 'react'
import ShoppingCartItem from './ShoppingCartItem'

export default class ShoppingCart extends Component {
    render() {
        return(
          <div id='cart-container'>
            {this.props.cart.map((item) => {
              return(
                <>
                    <ShoppingCartItem key = {item.item} item = {item}/>
                </>
              )
            })}
        </div>
    )
    }
}
