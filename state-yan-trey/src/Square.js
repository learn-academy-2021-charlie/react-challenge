import React, {Component} from 'react'
//As a user, I can see a white square on the screen---Square.js--->css to control the square outlook
//As a user, when I click on the square the name of a color appears in the box
//As a user, each time I click the box I see a new color name
//As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
//As a user, when I click the box, the background changes to match the name of the color name displayed in the box
//As a user, I can see many color boxes on the page all acting independently of one another

class Square extends React.Component{

    handleChange = () => {
        const {colorArray} = this.state
        this.setState({ selectColor: colorArray[Math.floor(Math.random() * 6)]})
        return this.setState
      }

    render(){
        return(
            <div className = "square" onClick = {this.handleChange}>
                <h1>{ this.state.selectColor }</h1>
            </div>
        )
    }
}

export default Square






  
