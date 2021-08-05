import React, { Component } from 'react'


class Dice extends React.Component{
    constructor(props){
      super(props)
      this.state = {
      }
    }
    diceRoll = () => {
      let rolls = Math.floor(Math.random() * 6) + 1;
      this.setState({rollSum: rolls})
    }

    render(){
        return(
          <>
          <div className="Dice" >

          
          <p onClick = {this.diceRoll}>  Dice Roller {this.props.rollSum}</p>
          </div>
          </>
        )
      }
    }

    export default Dice
