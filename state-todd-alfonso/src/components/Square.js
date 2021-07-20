import React, {Component} from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: "green"
        }
    }

    changeColor = () =>{
        console.log("changing color: ",this.state.color)
        this.setState({color: this.state.color})
    }



    render(){
        console.log("this works")
        return(
            <>
                <button onClick={this.changeColor}> {this.state.color} </button>
            </>
        )
    }



}



export default Square