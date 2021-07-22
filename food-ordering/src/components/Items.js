import React, { Component } from 'react'

class Items extends Component {
    render() {
        return (
            <>
            <ul>
                {Object.values(this.props.cartItems).map(value => {
                return (
                    <li>
                        <button onClick={() => this.props.addItem(value)}>
                            {value}
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