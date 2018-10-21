import React, { Component } from "react";

import "./App.css";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Promodoro Clock</h1>
        <Grid className="main-container">
          <Row className="time-setters ">
            <Col className="Session-time text-center" sm={6}>
              <div>Session time</div>
              <a href="#">+</a>
              <span>25</span>
              <a href="#">-</a>
            </Col>
            <Col className="Break-time text-center" sm={6}>
              <div>Break time</div>
              <a href="#">+</a>
              <span>5</span>
              <a href="#">-</a>
            </Col>
          </Row>
          <Row className="timerRow">
            <Col className="timerCol">
              <div className="timer-container">
                <span>Time</span>
              </div>
            </Col>
          </Row>
          <ButtonGroup className="buttonRow">
            <Button>Start</Button>

            <Button>Pause</Button>

            <Button>Refresh</Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default App;
