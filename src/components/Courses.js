import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import Course from "./Course";
import axios from "axios";

export default function Courses({ addToCart, cartNums }) {
  let mTimes = [];
  let [times, setTimes] = useState([]);
  useEffect(() => {
    console.log("hello");
    helperGetTime();
  }, []);

  async function helperGetTime() {
    let curr = times;
    console.log(cartNums);
    for (let i = 0; i < courses.length; i++) {
      let str = await getTime(courses[i].dept, courses[i].number);
      setTimes(prevTimes => [...prevTimes, str]);
    }
    mTimes = curr;
  }
  async function getTime(dept, num) {
    let base = "https://api.pennlabs.org/registrar/search?q=";
    try {
      let resp = await axios(base + dept + num);

      let data = resp.data;
      let meeting = data.courses[0].meetings[0];
      if (meeting) {
        let str = `${meeting.start_time} to ${meeting.end_time} (${meeting.meeting_days}) in ${meeting.building_code} ${meeting.room_number}`;
        return str;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="courses">
      {courses.map(({ dept, number, title, description }, ind) => {
        return (
          <div>
            <Course
              // className="course"
              key={`${dept}-${number}`}
              dept={dept}
              number={number}
              title={title}
              description={description}
              addToCart={() => addToCart(number, title, dept)}
              color={cartNums[number] ? "course gray" : " course pink"}
              meetingTime={times[ind]}
            />
          </div>
        );
      })}
    </div>
  );
}
