import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import "./UICard.css";

const styles = {
  card: {
    height: 500,
    width: 345
  },
  cardImg: {
    height: 450,
    width: 300
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    // <Card className={classes.card}>
    //   {/* <div className={props.styleClass}> */}
    //     <CardActionArea>
    //       <img src={props.img} alt={props.name} className="cardImg"></img>
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           {props.name}
    //         </Typography>
    //         <Typography component="p">
    //           {props.name} has HP: {props.hp}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   {/* </div> */}
    // </Card>
    <div className={props.styleClass}>
      <header className="card-header"><h1>{props.name}</h1></header>
      <img src={props.img} alt={props.name} className="cardImg"></img>
      <footer className="card-footer"> <h3>{props.name} has {props.hp}</h3></footer>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);