import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { Col, Row, Container } from "../Grid";
import Card from "../Card/Card";
import "./EnemyModal.css";

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: (0,0,0,0.7),
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    color: theme.palette.primary.contrastText,
    // width: 500,
    // height: 500,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          {/* <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SimpleModalWrapped />
          </div> */}
          <Container className="statBox">
          <Card>
            {/* <Container style={getModalStyle()} className={classes.paper}> */}
            <div style={getModalStyle()} className={classes.paper}>
              <Row><h1>STATS for {this.props.enemyName}</h1></Row>
              <Row>
                  <Col size="6">
                    <div className="attack-stats stats">
                        <h3 className="statName">Attack</h3>
                        <h3 className="percent">{this.props.attack}</h3> 
                    </div>
                  </Col>
                  {/* <Col size="3">
                    <div className="defense-stats stats">
                        <h3>Defense</h3>
                        <h3>{this.props.defense}</h3> 
                    </div>
                  </Col> */}
                  <Col size="6">
                    <div className="crit-stats stats">
                        <span className="statName">Chance of Critical</span><br></br>
                        <span className="percent">{this.props.crit}</span> 
                    </div>
                  </Col>
              </Row>
            </div>
            </Card>
            </Container>
          
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
