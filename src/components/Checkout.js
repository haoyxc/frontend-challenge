import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Checkout() {
  let [classes, setClasses] = useState([]);

  useEffect(() => {
    let classes = JSON.parse(localStorage.getItem("courses"));
    setClasses(classes);
    console.log("classes", classes);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-center checkoutNav">
          <div className="logo-container">
            <h3>Penn Course Cart</h3>
          </div>
        </div>
      </nav>

      <div className="checkoutList">
        <div>
          <h2>Your classes:</h2>
        </div>
        {classes.map(c => {
          return (
            <div className="checkoutItem cart-item">
              CIS {c[0]}: {c[1]}
            </div>
          );
        })}
        <div className="checkoutBtnContainer">
          <Link to="/" className="cartBtn">
            Back to Selection
          </Link>
        </div>
      </div>
    </>
  );
}
