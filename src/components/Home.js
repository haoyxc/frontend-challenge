import React, { Component } from "react";

import Nav from "./Nav";
import Courses from "./Courses";
import Cart from "./Cart";

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
  saveCart = () => {
    localStorage.setItem("courses", JSON.stringify(this.state.inCart));
    console.log("saved");
  };
  render() {
    const { showCart, inCart, clearCart, cartNums } = this.state;
    return (
      <>
        <Nav toggleCart={this.toggleCart.bind(this)} inCart={inCart} />
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <div className="divContainer">
            <Courses addToCart={this.addToCart.bind(this)} cartNums={cartNums} />
            <Cart
              clearCart={this.clearCart.bind(this)}
              showStatus={showCart ? "showCart" : "cart"}
              inCart={inCart}
              removeItem={this.removeItem.bind(this)}
              saveCart={this.saveCart.bind(this)}
            />
          </div>
        </div>
      </>
    );
  }
}
