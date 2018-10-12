import React from "react";
import "./CharacterSelect.css";

const CharacterSelect = props => {
    return <div className="characters" {...props}>{props.children}</div>
}

export default CharacterSelect;