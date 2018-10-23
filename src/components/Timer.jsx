import React from "react";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
const Timer = props => {
  return (
    <Row className="timerRow">
      <Col className="timerCol">
        <div className="timer-container">
          <h1>{props.timeLeft}</h1>
        </div>
      </Col>
    </Row>
  );
};
export default Timer;
