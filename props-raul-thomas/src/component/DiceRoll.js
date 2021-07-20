import React,{Component} from 'react';


class DiceRoll extends Component{
    constructor (props){
        super (props)
        this.state = {
            // ACTION ITEM: Add possible colors answers to the array
            answerArray: ["1", "2" , "3", "4", "5", "6"],
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
            <h1>Click Box to Roll</h1> 
    
            <br />
            <button onClick={ this.handleSubmit }>
                {this.state.selectedAnswer}
            </button>
           
            <p>
            {this.state.selectedAnswer}
                
                 </p>
          </>
        )
    
    }
    }
    export default DiceRoll 