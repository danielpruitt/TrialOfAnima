import React, { Component } from 'react';
import Auth from '../../utils/Auth';
import API from "../../utils/API";
import "./Nav.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
    API.getUser(this.state.id).then(res => this.setState({ userName: res.data[0].name, clears: res.data[0].numberOfClears }));
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }



  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <a className="navbar-brand" href="/">TRIALofANIMA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>`
        {this.state.authenticated ? (
          <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-text">
              <h2> <a href="/leaderboard">Leaderboard</a></h2>
            </div>
            <div className="navbar-text">
              <h2> Greetings {this.state.userName}!</h2>
            </div>
            <div className="navbar-text">
              <h2>Total Clears: {this.state.clears}</h2>
            </div>
            <div className="navbar-text">
              <h2><a className="nav-link" href="/logout">Logout</a></h2>
            </div>


          </div>
        ) : (
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
              
              </ul>
              <span>
                <li className="">
                  <a className="nav-text" href="/login">Login</a>
                </li>

              </span>
              <span>
                <li className="">
                  <a className="nav-text" href="/signup">Sign up</a>
                </li>

              </span>
            </div>
          )}
      </nav>
    );
  }
}

export default Nav;
