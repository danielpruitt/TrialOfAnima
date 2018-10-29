import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="uk-button uk-button-primary">
    {props.children}
  </button>;