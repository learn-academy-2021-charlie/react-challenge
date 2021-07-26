import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <>
                <h2>cart</h2>
                <ul>
                    {this.props.cart.map((value, index) =>{
                    return (
                        <li key={index}> {value} </li>)
                })}
          
                </ul>
            </>
        );
    }
}

export default Cart;
