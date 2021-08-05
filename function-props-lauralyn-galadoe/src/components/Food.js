import React, { Component } from 'react'

class Food extends Component {


  render(){

    return(
      <>
        <ul>
          {this.props.items.map(value => {
            return (
              <li>
                <button onClick ={ () => this.props.addItem(value)}>
                {value}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Food
