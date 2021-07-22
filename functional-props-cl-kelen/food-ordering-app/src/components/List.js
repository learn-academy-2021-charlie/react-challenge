import React, {Component} from 'react'
import FoodItem from './FoodItem'

export default class List extends Component {
    render(){
    return (
        <>
        {this.props.inventory.map((item) => {
            return(
            <li>
                <FoodItem addItemToList = {this.props.addItemToList} key = {item.item} item = {item}/>
            </li>
            )
        })}
        </>
    )
    }
}