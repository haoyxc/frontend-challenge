import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

class App extends Component {
  state = {
    showCart: false,
    inCart: [],
    cartNums: {}
  };

  render() {
    const { showCart, inCart, clearCart } = this.state;
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
        </>
      </Router>
    );
  }
}

export default App;
