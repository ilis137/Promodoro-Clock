import React from "react";

import Col from "react-bootstrap/lib/Col";
import "./BreakTime.css";
const BreakTime = props => {
  return (
    <Col className="Break-time text-center" sm={6}>
      <div className="BreakTime_Title">Break Time</div>
      <a href="#" className="incrementBreak" onClick={props.incrementBreak}>
        +
      </a>
      <span>{Math.floor(props.BreakTime / 60)}</span>
      <a href="#" className="decrementBreak" onClick={props.decrementBreak}>
        -
      </a>
    </Col>
  );
};
export default BreakTime;
