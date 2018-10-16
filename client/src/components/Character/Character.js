import React from "react";
import "./Character.css";


const Character = props => (
    <div className="charDiv" {...props}>{props.children}
    

    </div>
)

export default Character;