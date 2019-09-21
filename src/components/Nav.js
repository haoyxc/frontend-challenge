import React, { useState } from "react";

export default function Nav({ toggleCart, inCart }) {
  let [showCart, setShowCart] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-center">
          <span className="nav-icon">
            <i className="fa fa-bars"></i>
          </span>
          <div className="logo-container">
            <h3>Penn Course Cart</h3>
          </div>
          <div className="cart-btn" onClick={toggleCart}>
            <span className="nav-icon">
              <i className="fa fa-cart-plus"></i>
            </span>
            <div className="cart-items">{inCart.length}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
