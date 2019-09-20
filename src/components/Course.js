import React, { Component, useState, useEffect } from "react";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescrip: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({ showDescrip: !this.state.showDescrip });
    console.log("clicked");
  };

  //   handleClick(e) {
  //     e.preventDefault();
  //     this.setState(state => {
  //       showDescrip: !state.showDescrip;
  //     });
  //     console.log(this.showDescrip);
  //   }
  render() {
    let { dept, number, title, description, addToCart, color } = this.props;

    return (
      <div className={color}>
        <div onClick={this.handleClick}>
          <p key={`${dept}-${number}`} className="courseTitle">
            {dept} {number}: {title}
          </p>
          {this.state.showDescrip ? <p className="description">{description}</p> : null}
        </div>
        <div className="addBtn">
          <i className="fa fa-plus" onClick={addToCart}></i>
        </div>
      </div>
    );
  }
}
