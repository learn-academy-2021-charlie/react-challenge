import React, {Component} from 'react'

export default class ShoppingCartItem extends Component{
    render(){
        return(
            <>
            <button >
            {this.props.item.item}: {this.props.item.price}
            </button>
            </>
        )
    }
}