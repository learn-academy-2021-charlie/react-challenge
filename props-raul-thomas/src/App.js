import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DiceRoll from './component/DiceRoll';
import Counter from './component/Counter';


class App extends Component{
  constructor(props){
    super (props)
  }
  render(){
  return (
  <>
  <h1><DiceRoll/></h1>
  <h1><Counter/></h1>
  
  
  
  
  </>
    )
  }
}

export default App;
