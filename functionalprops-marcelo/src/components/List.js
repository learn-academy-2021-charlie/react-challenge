import React, { Component } from 'react';


class List extends Component {
    render() {
        return (
            <>
                <h1>My cart list</h1>
                <h3>Item</h3>
                <ul>{this.props.itemList.map((value, index) => {
                    return (
                        <li key={index}>
                            <p>
                                {`${value.name}: ${value.price} pesos`}
                            </p>
                            <button onClick={() => this.props.addToCart(value.name)}>
                                Add
                            </button>
                        </li>
                    )
                    })}
                </ul>
            </>
        );
    }
}

export default List;
