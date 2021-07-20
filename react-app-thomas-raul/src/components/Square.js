import { buildQueries } from '@testing-library/react'
import React, { Component } from 'react'

class Square extends Component{
constructor (props){
    super (props)
    this.state = {
        // ACTION ITEM: Add possible colors answers to the array
        answerArray: ["RED", "GREEN" , "YELLOW", "BLUE", "ORANGE"],
        selectedAnswer: ""
      }
}
handleSubmit = () => {
    const { answerArray } = this.state

    this.setState({ selectedAnswer: answerArray[Math.floor(Math.random() * answerArray.length)]})
  }


render (){
    return (
        <>
        <h1>PICK A <a>COLOR</a></h1> 

        <br />
        <button onClick={ this.handleSubmit }>
            {this.state.selectedAnswer}
        </button>
      </>
    )

}
}
export default Square