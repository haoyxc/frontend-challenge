import React, { Component, useState, useEffect } from "react";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescrip: false
    };
  }
  handleClick = () => {
    this.setState({ showDescrip: !this.state.showDescrip });
    console.log("clicked");
  };

  render() {
    let { dept, number, title, description, addToCart, color, meetingTime } = this.props;

    return (
      <div className={color}>
        <div onClick={this.handleClick}>
          <p key={`${dept}-${number}`} className="courseTitle">
            {dept} {number}: {title}
          </p>
          {this.state.showDescrip ? (
            <div>
              <p className="classTime">{meetingTime}</p>
              <p className="description">{description}</p>
            </div>
          ) : null}
        </div>
        <div className="addBtn">
          <i className="fa fa-plus" onClick={addToCart}></i>
        </div>
      </div>
    );
  }
}
