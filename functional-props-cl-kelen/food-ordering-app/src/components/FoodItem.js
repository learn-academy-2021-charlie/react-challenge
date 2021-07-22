import React, {Component} from 'react'

class FoodItem extends Component {
    render(){
        return(
            <button id='food-button' onClick = {() => this.props.addItemToList(this.props.item)} >

            {this.props.item.item}: {this.props.item.price}
            </button>
        )
    }
}
export default FoodItem
