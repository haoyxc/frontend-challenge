import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: []
    };
  }

  render() {
    let { showStatus, inCart, clearCart, removeItem, saveCart } = this.props;
    return (
      <div className="cart" className={showStatus}>
        <span className="close-cart"></span>
        <h2>Your Course Cart</h2>
        <div className="cart-content">
          {/* Cart Item */}
          {inCart.map((c, ind) => {
            return (
              <div>
                <div>
                  <div className="cart-item">
                    <div>
                      <h4 className="cartTitle">
                        {c[2]} {c[0]}: {c[1]}
                      </h4>
                      <p>{this.state.times[ind]}</p>
                    </div>
                    <div class="remove-item" onClick={() => removeItem(c[0])}>
                      <span class="fa fa-times"></span>
                      <span>Remove</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cart Item */}
          <div className="cart-footer">
            <h3>
              Number of classes: <span className="cart-total">{inCart.length}</span>
            </h3>
            <div className="cartBtns">
              <p className="clearCart cartBtn" onClick={clearCart}>
                {" "}
                Clear Cart
              </p>

              <Link
                to="/checkout"
                className="checkout cartBtn"
                onClick={saveCart}
                params={{ courses: inCart }}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
