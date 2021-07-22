import React, {Component} from 'react'
import ShoppingCartItem from './ShoppingCartItem'

export default class ShoppingCart extends Component {
    render() {
        return(
            <>
        {this.props.cart.map((item) => {
            return(
            <li>
                <ShoppingCartItem key = {item.item} item = {item}/>
            </li>
            )
        })}
        </>
    )
    }
}
