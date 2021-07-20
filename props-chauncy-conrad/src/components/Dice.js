import React, {Component} from 'react';

class Dice extends Component {
    render() {
      return (
        <>
            <div className="float-child">
                <div className='dice'>
                    <div id="square" onClick={this.props.rollDice}> 
                        <div id="rollnumber">{this.props.roll}</div>
                    </div>
                    <h1>Click Box to Roll</h1>
                </div>
            </div>
        </>
      )
    }
  }

export default Dice;