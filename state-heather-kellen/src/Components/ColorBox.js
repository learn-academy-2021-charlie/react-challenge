import React, {Component} from 'react'

class ColorBox extends Component{
  constructor(props){
    super(props)
      this.state = {
        colors: ["blue", "green", "red", "yellow", "purple", "orange"],
        currentColor: "",
        index: 0
      }
  }
  handleClick = () => {
    if(this.state.index === 5){
      this.setState({index: 0})
    }else{
      this.setState({index:this.state.index + 1})
    }
    this.setState({currentColor:this.state.colors[this.state.index]})
  }
  render(){
    return(
      <>
        <button style={{backgroundColor:this.state.currentColor}}  className="box" onClick={this.handleClick}>{this.state.currentColor}</button>

      </>
    )
  }
}

export default ColorBox
