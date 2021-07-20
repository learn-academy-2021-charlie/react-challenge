import React, {Component} from 'react';

class Dice extends Component {
    render() {
      return (
        <>
        <div>
            <div>
                <div className='dice'>
                    <div id="square" onClick={this.props.rollDice}> {this.props.roll}</div>
                    <h1>Click Box to Roll</h1>
                </div>
            </div>
        </div>
        </>
      )
    }
  }

export default Dice;