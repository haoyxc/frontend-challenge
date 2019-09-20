import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    let { showStatus, inCart, clearCart, removeItem, saveCart } = this.props;
    return (
      <div className="cart" className={showStatus}>
        {/* <div className="cart-overlay"> */}
        <span className="close-cart">{/* <i className="fa fa-window-close"></i> */}</span>
        <h2>Your Course Cart</h2>
        <div className="cart-content"></div>
        {/* Cart Item */}
        {inCart.map(c => {
          return (
            <div>
              <div>
                <div className="cart-item">
                  <div>
                    <h4>
                      CIS {c[0]}: {c[1]}
                    </h4>
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
          {/* <div className="cartOpts"> */}
          <h3>
            Number of classes: <span className="cart-total">{inCart.length}</span>
          </h3>
          <div className="cartBtns">
            <p className="clearCart cartBtn" onClick={clearCart}>
              {" "}
              Clear Cart
            </p>
            {/* <button className="clear-cart banner-btn">Clear cart</button> */}
            {/* </div> */}

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
    );
  }
}
