import React, {Component} from 'react';


class Goodbot extends Component {
    render() {
      return (
            <div>
              <h4>{this.props.userInput.split("").map((value,index)=>{
                return<>
                  <p>Goodbot Says {this.props.userInput} </p>
                </>
                }) }</h4>
            </div>
      )
    }
}
export default Goodbot;