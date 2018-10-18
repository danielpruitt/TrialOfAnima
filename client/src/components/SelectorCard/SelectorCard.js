import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./SelectorCard.css";

function SelectorCard(props) {
  const { classes } = props;
  return (
    <div className="characters" {...props}>
        <div className="selector">
        {props.children}
        </div>
    </div>
  );
}

SelectorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SelectorCard;