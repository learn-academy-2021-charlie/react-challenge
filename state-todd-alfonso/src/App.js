import React , {Component} from 'react'
import './App.css';
import Square from './components/Square.js'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Header</h1>
        <Square/>
      </div>
    )
  }
}

export default App;
