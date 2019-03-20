import React, { useState } from "react";

import TimeInput from "./TimeInput";
import TimeDisplay from "./TimeDisplay";
import SetTime from "./SetTime";
import Beep from "./Beep";

import "./App.css";

const CountDownApp = () => {
  let [minutes, setMinute] = useState("");
  let [seconds, setSecond] = useState("00");
  let remainSeconds;
  let handleSetInterval;

  const handleChange = e => {
    let { value } = e.target;
    if (value < 0) value = 0;
    setMinute(value);
  };

  const beep = () => {
    if (minutes == "00" && seconds == "00") return <Beep />;
  };

  const tick = () => {
    let min = Math.floor(remainSeconds / 60);
    let sec = remainSeconds - min * 60;
    setMinute(min);
    setSecond(sec);

    if (sec < 10) {
      setSecond("0" + sec);
    }

    if (min < 10) {
      setMinute("0" + min);
    }

    if (min === 0 && sec === 0) {
      clearInterval(handleSetInterval);
    }

    remainSeconds--;
  };

  const startCountDown = () => {
    handleSetInterval = setInterval(tick, 1000);
    remainSeconds = minutes * 60;
  };

  return (
    <div className="App">
      <TimeInput minutes={minutes} handleChange={handleChange} />
      <TimeDisplay seconds={seconds} minutes={minutes} />
      <SetTime startCountDown={startCountDown} />
      {beep()}
    </div>
  );
};
export default CountDownApp;
