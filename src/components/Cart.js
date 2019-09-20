import React, { Component } from "react";

export default class Cart extends Component {
  // showCart() {
  //   cartOverlay.classList.add("transparentBcg");
  //   cartDOM.classList.add("showCart");
  // }
  render() {
    let { showStatus, inCart, clearCart, removeItem } = this.props;
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
                <h4>
                  CIS {c[0]}: {c[1]}
                </h4>
                <span class="remove-item" onClick={() => removeItem(c[0])}>
                  Remove
                </span>
              </div>
            </div>
          );
        })}
        <div className="cart-item"></div>
        {/* Cart Item */}
        <div className="cart-footer">
          <h3>
            Number of classes: <span className="cart-total">{inCart.length}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={clearCart}>
            Clear cart
          </button>
          <a href="#" className="checkout">
            Checkout
          </a>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
