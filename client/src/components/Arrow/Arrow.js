import React from "react";
import "./Arrow.css";

const Arrow = props => (
    <div id="arrow" {...props}>{props.children}</div>
)

export default Arrow;