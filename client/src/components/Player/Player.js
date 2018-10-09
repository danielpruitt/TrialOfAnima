import React from "react";
import "./Player.css";

const Player = props => (
    <div className="playerDiv" {...props}>{props.children}</div>
)

export default Player;