import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./UICard.css";

const styles = {
  card: {
    height: "500px",
    width: "345px"
  },
  cardImg: {
    height: "450px",
    width: "300px"
  }
};

function MediaCard(props) {

  return (
    <div className={props.styleClass}>
      <header className="card-header"><h1>{props.name}</h1></header>
      <img src={props.image} alt={props.name} style={styles} className="cardImg flicker-3"></img>
      <footer className="card-footer"> <h3>{props.name} has {props.hp}</h3></footer>
      <div className="healthBar" style={{width: '100%'}}>
        <div className="currentHealthBar" style={{width: ((props.hp/props.maxHp) * 100) + '%'}}>
          {props.hp}
        </div>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);