import React, { Component } from 'react';
import Auth from '../../utils/Auth';

class Nav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
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
      <nav className="uk-navbar-container">
      <a className="uk-navbar-item uk-logo" href="/">LMS</a>
      <button className="uk-navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {this.state.authenticated ? (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="uk-navbar-item">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="uk-navbar-item">
            <a className="nav-link" href="/books">Books</a>
          </li>
          <li className="uk-navbar-item">
            <a className="nav-link" href="/users">Users</a>
          </li>
        </ul>
        <span className="uk-navbar-item">
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
