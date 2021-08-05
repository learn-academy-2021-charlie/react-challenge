import React, { Component } from "react"


class List extends Component {
    render () {
        return (
            <>
                <ul>
                {this.props.groceryItems.map((value, index) => {
                return ( <> {value} : ${this.props.itemPrices[index]}
                <li>
                <button onClick={()=> this.props.addItem(value, index)}>
                    Add to cart
                </button>
                </li>
                 </>
                )
                })}
                </ul>
            </>
        )
    }
}
export default List