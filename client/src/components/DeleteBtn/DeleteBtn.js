import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="uk-button uk-button-danger" {...props}>
    ✗
  </span>
);

export default DeleteBtn;
