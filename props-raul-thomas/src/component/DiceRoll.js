import React,{Component} from 'react';
import Counter from './Counter';

class DiceRoll extends Component{
    constructor (props){
        super (props)
        this.state = {
            // ACTION ITEM: Add possible colors answers to the array
            answerArray: [1, 2 , 3, 4, 5, 6],
            selectedAnswer: "",
          }
    }

 

    handleSubmit = () => {
        const { answerArray } = this.state
    
        this.setState({ selectedAnswer: answerArray[Math.floor(Math.random() * answerArray.length)]})
      }
    //   var button = document.getElementById("clickme"),
    //   count = 0;
    // button.onclick = function() {
    //   count += 1;
    // };
    
    render (){
        return (
            <>
            <h1>Click Box to Roll</h1> 
     <Counter count = {this.state.selectedAnswer}></Counter>

            <br />
            <button id = "clickme" onClick={ this.handleSubmit }>
                {this.state.selectedAnswer}
            </button>
            
          </>
        )
    
    }
    }
    export default DiceRoll 