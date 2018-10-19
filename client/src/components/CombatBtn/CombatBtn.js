import React from 'react';
import "./CombatBtn.css"

function CombatBtn(props) {
  return (
    <div className={`${props.styleClass} combatBtn`}>
      <button className="combatBtn" onClick={props.onClick}>
        <h1 className="command">{props.action}</h1>
      </button>
    </div>
  );
}

export default CombatBtn;