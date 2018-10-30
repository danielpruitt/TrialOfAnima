import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Col, Row, Container } from "../Grid";
import "./ClassModal.css";

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

const styles = () => ({
  paper: {
    position: 'absolute',
    backgroundColor: (0, 0, 0),
    boxShadow: theme.shadows[5],
    color: theme.palette.primary.contrastText,

  }

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
        <button className="statCheck" onClick={this.handleOpen}>STATS</button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          onClick={this.handleClose}
          className="Modal"
        >
          <Container>
            <div style={getModalStyle()} className={`${classes.paper} modalBody`}>
              <Row>
                <h1 className="col statHeader">{this.props.name} Stats</h1>
              </Row>
              <Row>

                <Col size="3" styleClass="statPadding"/>
                <Col size="2" styleClass="att-stats stats">
                  <h3 className="statName">Attack Damage</h3>
                  <h3 className="percent">{this.props.attack}</h3>
                </Col>

                <Col size="2" styleClass="def-stats stats">

                  <h3 className="statName">Defense</h3>
                  <h3 className="percent">{this.props.defense}</h3>

                </Col>

                <Col size="2" styleClass="crit-stats stats">
                  <h3 className="statName">Critical Damage</h3>
                  <h3 className="percent">{this.props.crit}</h3>
                </Col>
                <Col size="3" styleClass="statPadding"/>

              </Row>
            </div>

            {/* <button onClick={Modal.style.display = "none"}>Close</button> */}

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
