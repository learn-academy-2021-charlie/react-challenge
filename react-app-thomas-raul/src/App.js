import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/Square'




class App extends Component {
  constructor (props){
    super (props)
  }
render (){

  return (
    <div className="App">
   <Square/>
    </div>
  );
}
}

export default App;
