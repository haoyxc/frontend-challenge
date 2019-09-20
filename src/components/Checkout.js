import React, { useState, useEffect } from "react";

export default function Checkout() {
  let [classes, setClasses] = useState([]);

  useEffect(() => {
    let classes = JSON.parse(localStorage.getItem("courses"));
    setClasses(classes);
    console.log("classes", classes);
  }, []);

  return (
    <div className="checkoutList">
      {classes.map(c => {
        return (
          <div>
            {c[1]}
            {console.log(c)}
          </div>
        );
      })}
    </div>
  );
}
