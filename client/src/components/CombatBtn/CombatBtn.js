import React from 'react';
import "./CombatBtn.css";
import Button from '@material-ui/core/Button';


function CombatBtn(props) {
  return (
    <Button className={`${props.styleClass} combatBtn`} onClick={props.onClick}>
        <h1 className="command">{props.action}</h1>
    </Button>
  );
}

export default CombatBtn;