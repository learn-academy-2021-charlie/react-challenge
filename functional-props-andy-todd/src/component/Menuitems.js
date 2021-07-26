 import React, { Component } from 'react'
 

 class MenuItems extends Component {
  render() {
    return (
      <>
          <ul>
        {this.props.items.map(value => {
          return <>

          <button onClick = {() => this.props.addItem(value)}>
            {value}
          </button>
          </>
        })}
            
          </ul>
      </>
    )
  }
}

export default MenuItems