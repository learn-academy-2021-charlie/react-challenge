import React, { Component } from 'react'

class Items extends Component {
    render() {
        return (
            <>
            <ul>
                {Object.values(this.props.cartItems).map((value) => {
                return (
                    <li>
                        <button  onClick={() =>  this.props.addItem(value[0], value[1])}>
                            Item: {value[0]}{", "} price: {value[1]}
                        </button>
                    </li>
                )
                })
                }
            </ul>
            </>
        )
    } 
}

export default Items