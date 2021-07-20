
import { Component } from "react";


class Rolls extends Component{
    render(){
        return (<div className = "square" onClick = {this.props.handleDice}>
        <h1>{this.props.currentDice}</h1> </div>)
    }
}
export default Rolls