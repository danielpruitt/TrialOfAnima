import React from "react";
import "./Row.css";

export const Row = ({ fluid, children, styleClass }) =>
  <div className={`row${fluid ? "-fluid" : ""} ${styleClass}`}>
    {children}
  </div>;
