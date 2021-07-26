import React, { Component } from 'react'

class BadRobot extends Component{
    constructor (props){
        super (props)
        }
       
    



      render (){
            //match "BLA" with as many characters in the input box
        //return with props
      return (
<>
<h2>Bad Robot</h2>
  <p> I hear you saying {this.props.badResponse}. Is that correct?</p>
    

</>
      )

}
}

export default BadRobot