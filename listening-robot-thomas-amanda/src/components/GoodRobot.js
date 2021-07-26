import React, { Component } from 'react'

class GoodRobot extends Component{
    constructor (props){
        super (props)
        }
    
 
      render (){
      return (
     <>
     <h2>Good Robot</h2>
  <p> I hear you saying {this.props.goodResponse}. Is that correct?</p>
    
     </>
      )
    }
}
export default GoodRobot