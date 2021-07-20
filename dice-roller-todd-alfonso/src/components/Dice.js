import diceImg1 from "../assets/dice-1.png"
import React,{Component} from 'react'
class Dice extends Component{
    render(){
        return(
            <div onClick = {this.props.diceFunction} className = "dice"></div>
            //<img src = {diceImg1} className = "dice" />
        )
    }

}

export default Dice