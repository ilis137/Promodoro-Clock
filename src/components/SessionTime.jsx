import React from "react";

import Col from "react-bootstrap/lib/Col";

const SessionTime = props => {
  return (
    <Col className="Session-time text-center" sm={6}>
      <div>Session time</div>
      <a href="#" className="incrementSession" onClick={props.incrementSession}>
        +
      </a>
      <span>{Math.floor(props.sessionTime / 60)}</span>
      <a href="#" className="decrementSession" onClick={props.decrementSession}>
        -
      </a>
    </Col>
  );
};
export default SessionTime;
