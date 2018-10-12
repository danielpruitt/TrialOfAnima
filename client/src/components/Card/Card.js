import React from "react";
import "./Card.css";

const Card = props => (
    <div id="card" {...props}>{props.children}</div>
)

export default Card;