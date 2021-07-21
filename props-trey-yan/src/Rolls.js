import { Component } from "react";


class Rolls extends Component{
    render(){
        return (<div className = "square" onClick = {this.props.spiderman}>
        <h1>{this.props.superman}</h1> </div>)
    }
}

export default Rolls
