import React from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import "./ControlPanel.css";

const ControlPanel = props => {
  return (
    <ButtonGroup className="buttonRow">
      <Button className="start" onClick={props.handleStart}>
        Play
      </Button>

      <Button className="pause" onClick={props.handlePause}>
        pause
      </Button>

      <Button className="refresh" onClick={props.handleRefresh}>
        refresh
      </Button>
    </ButtonGroup>
  );
};
export default ControlPanel;
