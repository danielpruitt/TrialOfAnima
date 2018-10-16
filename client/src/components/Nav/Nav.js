import React, { Component } from 'react';
import Auth from '../../utils/Auth';

class Nav extends Component {
  
  constructor(props) {
    super(props);
    let userName = localStorage.getItem("Player");
    this.state = {
      authenticated: false,
      userName: userName
    }
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">MindRPG</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
        <span className="navbar-text">
          <a className="nav-link" href="/logout">Logout</a>
        </span>
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
