import logo from './logo.svg';
import './App.css';
import react,{Component} from 'react'
import './component/Menuitems'
import MenuItems from './component/Menuitems';

class App extends Component{
  constructor(props){
  super (props)  
  this.state = {
    cart: [],
    menuItems: [
      "Cheeseburger $4.50", 
      "Fries $1.50", 
      "Hot Dog $2.00"
    ]
  }}
 
addItem=(item =>{
alert(item)
})


render(){
  return (
  <>
  <h1> Cheesey Joe's </h1>

  < MenuItems addItem ={this.addItem} items ={
    this.state.menuItems
  } />
 
  </>
  )
  }
}
  

export default App;
