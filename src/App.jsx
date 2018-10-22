import React, { Component } from "react";

import "./App.css";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
class App extends Component {
  state = {
    sessionTime: 0.1 * 60,
    breakTime: 5 * 60,
    timerValue: "00:06"
  };

  handleStart = () => {
    const time = this.state.timerValue.split(":");
    const mins = Number.parseInt(time[0], 10);
    const secs = Number.parseInt(time[1], 10);
    console.log(mins + ":" + secs);
    const timeLeft = mins * 60 + secs;
    let seconds =
      this.state.sessionTime > timeLeft ? timeLeft : this.state.sessionTime;
    this.countdown = setInterval(() => {
      seconds = --seconds;
      if (seconds < 0) {
        clearInterval(this.countdown);
        return;
      }
      this.displayTimeLeft(seconds);
    }, 1000);
  };
  displayTimeLeft = seconds => {
    const mins = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    this.setState({
      timerValue:
        mins + ":" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft)
    });
  };
  handlePause = () => {
    clearInterval(this.countdown);
  };
  handleRefresh = () => {
    clearInterval(this.countdown);
    this.setState({
      timerValue: "00:06"
    });
  };
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
                <span>{this.state.timerValue}</span>
              </div>
            </Col>
          </Row>
          <ButtonGroup className="buttonRow">
            <Button className="start" onClick={this.handleStart}>
              Start
            </Button>

            <Button className="pause" onClick={this.handlePause}>
              Pause
            </Button>

            <Button className="refresh" onClick={this.handleRefresh}>
              Refresh
            </Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default App;
