import logo from "./logo.svg";
import "./App.css";
import react, { Component } from "react";
import "./component/Menuitems";
import MenuItems from "./component/Menuitems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      menuItems: [
        "Cheeseburger $4.50",
        "Fries $1.50",
        "Hot Dog $2.00",
        "Pizza $3.00",
        "Salad $4.50",
      ],
    };
  }

  addItem = (item) => {
    this.setState({ cart: [...this.state.cart, item] });
  };

  render() {
    return (
      <>
        <h1> Cheesey Joe's </h1>

        <MenuItems addItem={this.addItem} items={this.state.menuItems} />
        <h3>Cart</h3>
        <ul>
          {this.state.cart.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
