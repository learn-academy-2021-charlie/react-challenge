import React, { Component } from 'react'

class GoodRobot extends Component {
    render (){
        return (
            <>
                <h3>Good Robot</h3>
                <p>I hear you saying {this.props.userInput}. Is that correct?</p>
            </>
        )
    }
}

export default GoodRobot