import React, {Component} from 'react';

class Roll extends Component {
    render() {
      return (
        <>
         <div>
            <div>
                <div>
                   <div id="square2" > {this.props.roll}</div>
                </div>
            </div>
        </div>
        </>
      )
    }
  }

export default Roll;