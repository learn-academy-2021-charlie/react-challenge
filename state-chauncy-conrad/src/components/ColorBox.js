import React, {Component} from 'react';
import '../App.css';

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorName: ['green', 'blue', 'yellow', 'red', 'purple', 'orange']
        }
    }

    changeColor = () => {
        var randomColor = Math.floor(Math.random() * 5);
        
        this.setState({colorName: this.state.colorName[randomColor]})
    }

    render() {
      return (
        <>
          <div onClick={this.changeColor} style={{color: this.state.colorName}} className={`square ${this.state.colorName}`}>
            {this.color}
          </div>
        </>
      )
    }
  }


export default ColorBox;