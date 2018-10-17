import React from "react";

export const Col = ({ size, styleClass, children }) =>
  <div className={`${size.split(" ").map(size => "col-" + size).join(" ")} ${styleClass}`}>
    {children}
  </div>;
