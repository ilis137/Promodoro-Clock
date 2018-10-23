import React from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";

const ControlPanel = props => {
  return (
    <ButtonGroup className="buttonRow">
      <Button className="start" onClick={props.handleStart}>
        Start
      </Button>

      <Button className="pause" onClick={props.handlePause}>
        Pause
      </Button>

      <Button className="refresh" onClick={props.handleRefresh}>
        Refresh
      </Button>
    </ButtonGroup>
  );
};
export default ControlPanel;
