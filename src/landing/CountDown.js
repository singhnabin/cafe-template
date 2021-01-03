import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import "./Countdown.css";

function CountDown() {
  const [values, setValues] = useState({
    deadLine: "Jan, 20, 2021",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const { deadLine, days, hours, minutes, seconds } = values;
  const getTimeCount = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Event already closed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setValues({ ...values, days, hours, minutes, seconds });
    }
  };
  const checkforDigit = num => {
    if (num >= 0 && num < 10) {
      return "0" + num;
    }
    return num;
  };

  useEffect(() => {
    setInterval(() => {
      getTimeCount(deadLine, 1000);
    });
  }, []);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event Starts In</div>

        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">
              <div className="time">{checkforDigit(days)}</div>
              <div className="countdown_tag">Days</div>
            </div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">
              <div className="time">{checkforDigit(hours)}</div>
              <div className="countdown_tag">Hours</div>
            </div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">
              <div className="time">{checkforDigit(minutes)}</div>
              <div className="countdown_tag">Minutes</div>
            </div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">
              <div className="time">{checkforDigit(seconds)}</div>
              <div className="countdown_tag">Seconds</div>
            </div>
          </div>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </Slide>
  );
}

export default CountDown;
