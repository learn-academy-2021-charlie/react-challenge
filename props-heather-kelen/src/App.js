import React, {Component} from 'react'
import './App.css';
import Dice from './Components/Dice.js'
import Rolls from './Components/Rolls.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      currentRoll:0,
      rolls:[]
    }
  }

  handleClick=()=>{
    let number = Math.floor(Math.random() * 6)+1
    this.setState({
      currentRoll: number,
      rolls:[...this.state.rolls,number]

    })
  }

  clear = () => {
    this.setState({rolls: []})
  }

  render(){
    return(
      <>
        <div id='wrapper'>
          <h2>Dice Roller</h2>
          <div id='container'>
            <Dice
              id='dice'
              currentRoll={this.state.currentRoll}
              handleClick={this.handleClick}
             />
            <Rolls id='rolls' rolls={this.state.rolls} clear={this.clear}/>
          </div>
        </div>
      </>
    )
  }
}

export default App;
