import React from "react";

const TimeDisplay = ({ minutes, seconds }) => {
  return (
    <h1>
      {minutes} : {seconds}
    </h1>
  );
};

export default TimeDisplay;
