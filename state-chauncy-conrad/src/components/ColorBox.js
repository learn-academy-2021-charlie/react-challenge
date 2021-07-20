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

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        this.setState({colorName: this.state.colorName[2]})
    }

    render() {
        console.log(this.state.colorName[2])
      return (
        <>
          <div onClick={this.changeColor} style={{colorName: this.state.colorName}} id='square' >testing</div>
        </>
      )
    }
  }


export default ColorBox;