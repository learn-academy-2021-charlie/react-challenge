import './App.css';
import React, {Component} from 'react'
import ColorBox from './Components/ColorBox.js'

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        boxes:[0],
      }
  }
  handleAdd = () => {
    this.setState({boxes: [...this.state.boxes,Math.random()]})
  }
  handleRemove = () => {
    console.log(this.state.boxes)
    let length = this.state.boxes.length
    let newArray = this.state.boxes.slice(0, length-1)
    if(this.state.boxes.length > 1){
      this.setState({boxes: newArray})
    }
    console.log(this.state.boxes)
  }
render (){
  return(
  <>
  <button onClick={this.handleAdd}>Create Box</button>
  <button onClick={this.handleRemove}>Remove Box</button>
  {this.state.boxes.map((i)=>{
    if(i != 0){
      return (
        <>
        <ColorBox key={i} />
        </>
      )
    }
  })}
  </>
)
}
}


export default App;
