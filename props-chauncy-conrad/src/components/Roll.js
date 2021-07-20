import React, {Component} from 'react';

class Roll extends Component {
    render() {
      return (
        <>
            <div className="float-child">
                <div>
                   <div className="oldRoll"> {this.props.roll}</div>
                </div>
            </div>
        </>
      )
    }
  }

export default Roll;