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
    let { dept, number, title, description, addToCart } = this.props;

    return (
      <div className="course">
        <div onClick={this.handleClick}>
          <p key={`${dept}-${number}`}>
            {dept} {number}: {title}
          </p>
          {this.state.showDescrip ? <p className="description">{description}</p> : null}
        </div>
        <div>
          <i className="fa fa-plus" onClick={addToCart}></i>
        </div>
      </div>
    );
  }
}
