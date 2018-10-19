import React from 'react';
import PropTypes from 'prop-types';
import "./SelectorCard.css";

function SelectorCard(props) {

  return (
    <div className="characters" {...props}>
        <div className="selector">
        {props.children}
        </div>
    </div>
  );
}

export default SelectorCard;