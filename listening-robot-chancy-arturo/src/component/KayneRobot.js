import React, { Component } from 'react'

class KayneRobot extends Component {
    render (){
        return (
            <>
                <h3>Kayne Robot</h3>
                <p>{this.props.userInput}</p>
            </>
        )
    }
}

export default KayneRobot