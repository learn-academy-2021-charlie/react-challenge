import React,{Component} from 'react';


class DiceRoll extends Component{
    constructor (props){
        super (props)
        this.state = {
            // ACTION ITEM: Add possible colors answers to the array
            answerArray: ["1", "2" , "3", "4", "5", "6"],
            selectedAnswer: "",
            rolledArray: []

          }
    }
    handleSubmit = () => {
        const { answerArray } = this.state
    
        this.setState({ selectedAnswer: answerArray[Math.floor(Math.random() * answerArray.length)]})
      }
    rolled = () =>{
        const { rolledArray} = this.state
            this.setState({ rolledArray: rolledArray.push(this.state.selectedAnswer)})
    }
    
    render (){
        return (
            <>
            <h1>Click Box to Roll</h1> 
    
            <br />
            <button onClick={ this.handleSubmit }>
                {this.state.selectedAnswer}
            </button>
            <h2 onClick={this.handleSubmit}>Hello {this.props.selectedAnswer}</h2>
            
          </>
        )
    
    }
    }
    export default DiceRoll 