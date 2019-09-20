import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";

export default class Home extends Component {
  state = {
    showCart: false,
    inCart: [[120, "Computer Science"]],
    cartNums: { 120: "Computer Science" }
  };
  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
    console.log(this.state.showCart);
  };
  addToCart = (number, title) => {
    if (!this.state.cartNums[number] && this.state.inCart.length < 7) {
      let newCart = this.state.inCart;
      let newNums = this.state.cartNums;
      newNums[number] = title;
      newCart.push([number, title]);
      this.setState({ inCart: newCart, cartNums: newNums });
    }
    console.log(this.state.inCart);
  };
  clearCart = () => {
    this.setState({
      inCart: [],
      cartNums: {}
    });
  };
  removeItem = number => {
    let newCart = this.state.inCart;
    let newNums = this.state.cartNums;
    newNums[number] = undefined;
    newCart = newCart.filter(c => {
      return c[0] !== number;
    });
    this.setState({ inCart: newCart, cartNums: newNums });
    console.log("remove", number);
  };
  render() {
    const { showCart, inCart, clearCart } = this.state;
    return (
      <>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <div className="divContainer">
            <Courses addToCart={this.addToCart.bind(this)} />
            <Cart
              clearCart={this.clearCart.bind(this)}
              showStatus={showCart ? "showCart" : "cart"}
              inCart={inCart}
              removeItem={this.removeItem.bind(this)}
            />
          </div>
        </div>
      </>
    );
  }
}
