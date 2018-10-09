import React from "react";
import "./Enemy.css";

const Enemy = props => (
    <div className="enemyDiv" {...props}>{props.children}</div>
)

export default Enemy;