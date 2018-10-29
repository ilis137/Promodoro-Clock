import React, { Component } from "react";
import "./App.css";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import SessionTime from "./components/SessionTime";
import BreakTime from "./components/BreakTime";
import Timer from "./components/Timer";
import ControlPanel from "./components/ControlPanel";

class App extends Component {
  state = {
    sessionTime: 25 * 60,
    breakTime: 5 * 60,
    timerValue: 0.05 * 60,
    sessionTimer: true,
    timerStatus: "off",
    timeOut: false,
    playing: false
  };

  handleStart = () => {
    const timeLeft = this.state.timerValue;
    let seconds =
      this.state.sessionTime > timeLeft ? timeLeft : this.state.sessionTime;
    this.countdown = setInterval(() => {
      seconds = --seconds;
      seconds === 0 && this.setState({ timeOut: true });
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
  playSound = () => {
    const audio = new Audio("https://goo.gl/65cBl1");
    this.setState({ playing: true });
    audio.play();

    console.log(audio.play() == true);
    setTimeout(() => {
      this.setState({ timeOut: false });
      this.setState({ playing: false });
    }, 10000);
  };

  render() {
    const secs = this.state.timerValue;
    const mins = Math.floor(secs / 60);
    const secondsLeft = secs % 60;
    const timeLeft =
      mins + ":" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
    this.state.timeOut && !this.state.playing && this.playSound();
    return (
      <div className="App">
        <h1 className="Title">Promodoro Clock</h1>
        <Grid className="main-container">
          <Row className="time-setters">
            <SessionTime
              incrementSession={e => this.handleIncrement(e)}
              sessionTime={this.state.sessionTime}
              decrementSession={e => this.handleDecrement(e)}
            />
            <BreakTime
              incrementBreak={e => this.handleIncrement(e)}
              BreakTime={this.state.breakTime}
              decrementBreak={e => this.handleDecrement(e)}
            />
          </Row>
          <Timer timeLeft={timeLeft} />
          <ControlPanel
            handleStart={this.handleStart}
            handlePause={this.handlePause}
            handleRefresh={this.handleRefresh}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
