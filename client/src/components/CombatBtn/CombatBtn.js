import React from 'react';
import "./CombatBtn.css"

function CombatBtn(props) {
  return (
    <div className={`${props.styleClass} combatBtn`}>
        <button onClick={props.onClick} className="command"><h3>{props.action}</h3></button>
    </div>
  );
}

export default CombatBtn;