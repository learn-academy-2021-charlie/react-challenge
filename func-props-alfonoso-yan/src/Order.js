import React, {Component} from "react"

class Order extends Component{
    render(){
        return(
            <>
            <ul>
                {this.props.orderItem.map(value =>{
                    return(
                        <li> 
                            <button onClick={()=>this.props.addItem(value)}>{`${value.name} $ ${value.price}`}</button>
                        </li>   
                    )
                })}
            </ul>
            </>
        )
    }
}

export default Order