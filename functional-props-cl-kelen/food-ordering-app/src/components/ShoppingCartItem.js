import React, {Component} from 'react'

export default class ShoppingCartItem extends Component{
    render(){
        return(
            <>
              <div id='cart-item'>
                {this.props.item.item}: {this.props.item.price}
              </div>
            </>
        )
    }
}
