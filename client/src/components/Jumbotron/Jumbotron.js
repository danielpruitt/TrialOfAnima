import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both' , backgroundColor: "transparent", color: "white"}} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
