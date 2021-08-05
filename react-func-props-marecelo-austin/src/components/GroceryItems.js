import React, { Component } from 'react'

export default class GroceryItems extends Component {

    render() {
        return (
            <div>
                 {this.props.items.map(value => {
                     return <>
                     <button 
                     onClick={()=>this.props.addToCart(value)}
                     >
                         {value.food + ` $${value.price}`}
                         </button>
                         
                        
                     </>
                 })}
            </div>
        )
    }
}



// ()=>{}