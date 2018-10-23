import React, { Component } from 'react';
import Auth from '../../utils/Auth';
import API from "../../utils/API";
import "./Nav.css";

class Nav extends Component {
  
  constructor(props) {
    super(props);
    let id = API.getUserId();
    this.state = {
      authenticated: false,
      userName: "",
      id: id,
      clears: 0
    }
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
    API.getUser(this.state.id).then(res => this.setState({userName: res.data[0].name, clears: res.data[0].numberOfClears}));
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">MindRPG</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {this.state.authenticated ? (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <span className="navbar-text">
          <center>Hi! Welcome {this.state.userName}</center>
          </span>
          <span>
            <center>, Clears: {this.state.clears}</center>
          </span>
          <a className="nav-link" href="/logout">Logout</a>
      </div>
      ) : (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <span>
          <a className="nav-link" href="/login">Login</a>
        </span>
        <span>
          <a className="nav-link" href="/signup">Sign up</a>
        </span>
      </div>
      )}
    </nav>
    );
  }
}

export default Nav;
