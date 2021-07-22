 import React, { Component } from 'react'
 

 class MenuItems extends Component {
  render() {
    console.log(this.props,"this is on the menu items")
    return (
      <>
          <ul>
        {this.props.items.map(value => {
          return <>

          <button onClick= {this.props.addItem} >{value}</button>
          </>
        })}
            
          </ul>
      </>
    )
  }
}

export default MenuItems