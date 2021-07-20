import React, { Component } from 'react'


class Dice extends React.Component{
    constructor(props){
      super(props)
      this.state = {
      }
    }

    render(){
        return(
          <>
          <div className="Dice">

          <p>Dice Roller</p>
          <p>Rolls {this.props.rollSum}</p>
          </div>
          </>
        )
      }
    }

    export default Dice
