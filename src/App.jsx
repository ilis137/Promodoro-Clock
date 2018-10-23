import React, { Component } from "react";

import "./App.css";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import SessionTime from "./components/SessionTime";
class App extends Component {
  state = {
    sessionTime: 25 * 60,
    breakTime: 5 * 60,
    timerValue: 25 * 60,
    sessionTimer: true,
    timerStatus: "off"
  };

  handleStart = () => {
    const timeLeft = this.state.timerValue;
    let seconds =
      this.state.sessionTime > timeLeft ? timeLeft : this.state.sessionTime;
    this.countdown = setInterval(() => {
      seconds = --seconds;
      if (seconds < 0) {
        this.setState({ sessionTimer: !this.state.sessionTimer });
        seconds = this.state.sessionTimer
          ? this.state.sessionTime
          : this.state.breakTime;
      }
      this.setState({
        timerStatus: "on",
        timerValue: seconds
      });
    }, 1000);
  };

  handlePause = () => {
    this.setState({
      timerStatus: "off"
    });
    clearInterval(this.countdown);
  };
  handleRefresh = () => {
    clearInterval(this.countdown);
    this.setState({
      timerValue: this.state.sessionTime,
      timerStatus: "off"
    });
  };
  handleIncrement = e => {
    e.target.className === "incrementSession"
      ? this.state.sessionTimer
        ? this.state.timerStatus === "on"
          ? this.setState({
              sessionTime: this.state.sessionTime + 60
            })
          : this.setState({
              sessionTime: this.state.sessionTime + 60,
              timerValue: this.state.sessionTime + 60
            })
        : this.setState({
            sessionTime: this.state.sessionTime + 60
          })
      : !this.state.sessionTimer
        ? this.state.timerStatus === "on"
          ? this.setState({ breakTime: this.state.breakTime + 60 })
          : this.setState({
              breakTime: this.state.breakTime + 60,
              timerValue: this.state.breakTime + 60
            })
        : this.setState({
            breakTime: this.state.breakTime + 60
          });

    console.log(this.state.sessionTime);
    console.log(this.state.breakTime);
  };
  handleDecrement = e => {
    e.target.className === "decrementSession"
      ? this.state.sessionTimer
        ? this.state.timerStatus === "on"
          ? this.setState({
              sessionTime: this.state.sessionTime - 60
            })
          : this.setState({
              sessionTime: this.state.sessionTime - 60,
              timerValue: this.state.sessionTime - 60
            })
        : this.setState({
            sessionTime: this.state.sessionTime - 60
          })
      : !this.state.sessionTimer
        ? this.state.timerStatus === "on"
          ? this.setState({ breakTime: this.state.breakTime + 60 })
          : this.setState({
              breakTime: this.state.breakTime - 60,
              timerValue: this.state.breakTime - 60
            })
        : this.setState({
            breakTime: this.state.breakTime - 60
          });

    console.log(this.state.sessionTime);
    console.log(this.state.breakTime);
  };
  render() {
    const secs = this.state.timerValue;
    const mins = Math.floor(secs / 60);
    const secondsLeft = secs % 60;
    const timeLeft =
      mins + ":" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
    return (
      <div className="App">
        <h1>Promodoro Clock</h1>
        <Grid className="main-container">
          <Row className="time-setters">
            <SessionTime
              incrementSession={e => this.handleIncrement(e)}
              sessionTime={this.state.sessionTime}
              decrementSession={e => this.handleDecrement(e)}
            />
            <Col className="Break-time text-center" sm={6}>
              <div>Break time</div>
              <a
                href="#"
                className="incrementBreak"
                onClick={e => this.handleIncrement(e)}
              >
                +
              </a>
              <span>{Math.floor(this.state.breakTime / 60)}</span>
              <a
                href="#"
                className="decrementBreak"
                onClick={e => this.handleDecrement(e)}
              >
                -
              </a>
            </Col>
          </Row>
          <Row className="timerRow">
            <Col className="timerCol">
              <div className="timer-container">
                <h1>{timeLeft}</h1>
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
