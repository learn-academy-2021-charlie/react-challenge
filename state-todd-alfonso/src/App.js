import React , {Component} from 'react'
import './App.css';
import Square from './components/Square.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        color: "white",
        boxes: 1
    }
}
  reset = () => {
  this.setState({boxes: 1})
   console.log("resetting") 
  }
  render(){
    return (
      <div className="App">
        <h1>Header</h1>
        <Square/>
      <button onClick={this.reset}>Reset</button>
      </div>
    
    )
  }
}

export default App;
