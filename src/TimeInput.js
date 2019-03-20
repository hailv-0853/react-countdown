import React, { Fragment } from "react";

const TimeInput = ({ value, minutes, handleChange }) => (
  <Fragment>
    <h3>Set time</h3>
    <input type="number" onChange={handleChange} />
  </Fragment>
);

export default TimeInput;
