import React, {Component} from 'react'

class Square extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        text: "hello"
      }
  }


  textChange = () => {
    let newText = ["red", "yellow", "green", "blue"]
    for(let i=0; i < newText.length; i++){
      if(newText[i] == "red"){
        return newText[i]
      }else if(newText[i] == "yellow"){
        return newText[i]
      }else if(newText[i] == "green"){
        return newText[i]
      }else if(newText[i] == "yellow"){
        return newText[i]
      }
    }

  render(){
    return(
      <div className = "square">
        <p onClick = {this.textChange}>Hello World</p>

      </div>
    )
  }
}
export default Square
