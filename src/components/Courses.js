import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import Course from "./Course";

export default function Courses({ addToCart }) {
  return (
    <div className="courses">
      {courses.map(({ dept, number, title, description }) => {
        return (
          <div>
            <Course
              // className="course"
              key={`${dept}-${number}`}
              dept={dept}
              number={number}
              title={title}
              description={description}
              addToCart={() => addToCart(number, title)}

              // onClick={() => {
              //   this.props.handleClick;
              // }}
            />
          </div>
        );
      })}
    </div>
  );
}
